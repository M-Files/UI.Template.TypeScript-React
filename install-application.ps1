param(
    [Parameter(Mandatory=$False)]
    [string[]] $InstallGroups=@()
)

# Application details
$appFilePath = "package\ShellUI_ReactUX_App.mfappx" #TEMPLATED_TODO - Change this to your own packaged app name.
$appGuid = "21cb8d15-da94-4f1c-939c-e4b9e54457be" #TEMPLATED_TODO - Use the newly generated GUID from appdef.xml.

# Target vault
$vaultName = ""

# Connection details 
$authType = 1 # 1 = MFAuthTypeLoggedOnWindowsUser
$userName = ""
$password = ""
$domain = ""
$spn = ""
$protocolSequence = "ncacn_ip_tcp"
$networkAddress = "localhost"
$endpoint = 2266
$encryptedConnection = $false
$localComputerName = ""

$ErrorActionPreference = 'Stop'

# Append the current path so we have the full location (required in some situations).
$currentDir = Get-Location
$appFilePath = Join-Path $currentDir $appFilePath

# If we are using install-application.user.json then parse the vault connections.
$vaultConnections = @()
try {
    $jsonInput = Get-Content -Path install-application.user.json | ConvertFrom-Json

    if($InstallGroups.Count -eq 0) {
        Write-Output "No install groups given, proceeding with default"
        $InstallGroups += "default"
    }
    ForEach($jsonConnection in $jsonInput.VaultConnections) {
        ForEach($ig in $InstallGroups) {

            # if no groups, include to default
            if(-not $jsonConnection.installGroups) {
                if($InstallGroups -contains "default") {
                    $vaultConnections += $jsonConnection
                    Write-Output "$($jsonConnection.vaultName) has no groups - included in default"
                }
                break; # The connection has no groups, no further looping is needed
            }

            if($jsonConnection.InstallGroups -contains $ig) {
                $vaultConnections += $jsonConnection
                Write-Output "$($jsonConnection.vaultName) has group $($ig) - included"
                break;
            }
        }
    }
}
catch {
    $error.clear();
}

if($vaultConnections.Count -eq 0) {
    $vaultConnections += [PSCustomObject]@{
        vaultName = $vaultName
        authType = $authType
        userName = $userName
        password = $password
        domain = $domain
        spn = $spn
        protocolSequence = $protocolSequence
        networkAddress = $networkAddress
        endpoint = $endpoint
        encryptedConnection = $encryptedConnection
        localComputerName = $localComputerName
    }
}

ForEach($vc in $vaultConnections) {
    # Load M-Files API
    Add-Type -Path 'C:\WINDOWS\assembly\GAC_MSIL\Interop.MFilesAPI\7.0.0.0__f1b4733f444f7ad0\Interop.MFilesAPI.dll'

    # Connect to M-Files Server
    Write-Host "Connecting to '$($vc.vaultName)' on $($vc.networkAddress)..."
    $server = new-object MFilesAPI.MFilesServerApplicationClass
    $tzi = new-object MFilesAPI.TimeZoneInformationClass
    $tzi.LoadWithCurrentTimeZone()
    $null = $server.ConnectAdministrativeEx( $tzi, $vc.authType, $vc.userName, $vc.password, $vc.domain, $vc.spn, $vc.protocolSequence, $vc.networkAddress, $vc.endpoint, $vc.encryptedConnection, $vc.localComputerName )

    # Get the target vault
    $vaultOnServer = $server.GetOnlineVaults().GetVaultByName( $vc.vaultName )

    # Login to vault
    $vault = $vaultOnServer.LogIn()
	
    # Try to uninstall existing application
    try
    {
        Write-Host "Checking for previous installation of the application..."

        # Uninstall
        $vault.CustomApplicationManagementOperations.UninstallCustomApplication( $appGuid );
    }
    catch {}

    # Install application.
    Write-Host "Installing application..."
    $vault.CustomApplicationManagementOperations.InstallCustomApplication( $appFilePath )

    Write-Host "Installation done"
}