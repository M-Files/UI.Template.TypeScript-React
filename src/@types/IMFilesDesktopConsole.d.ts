// Add type for console logging initialization
interface IMFilesDesktopConsole extends Console {
	initialize(shellUI: MFilesUI.IShellUI, consoleName: string): void;
}
