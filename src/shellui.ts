import "MFiles";
import "ShellUIModule";
import { getConfig } from "./core/Configuration";
import { DashboardLauncher } from "./core/DashboardLauncher";
import { ICustomDashboardData } from "./core/interface/ICustomDashboardData";


/**
 * Entry point for shellUI module.
 * @param shellUI - The new shellUI object.
 */
ShellUIModule.OnNewShellUI = (shellUI: MFilesUI.IShellUI) => {
	// #TEMPLATED_TODO - Dashboard ID.
	// The dashboard tsx file(s) should be in the form "{dashboardId}.dashboard.tsx" (i.e. in this sample "Sample.dashboard.tsx")
	// See function loadDashboard() on Base.dashboard.ts for implementation details.
	const dashboardId = "Sample";

	// Wait for shell frames to be created.
	shellUI.Events.Register(MFiles.Event.NewNormalShellFrame, OnNewNormalShellFrame);

	// Handler for shell frame created event.
	function OnNewNormalShellFrame(shellFrame: MFilesUI.IShellFrame) {
		shellFrame.Events.Register(MFiles.Event.Started, OnStarted);
		function OnStarted() {
			const dashTab = shellFrame.RightPane.AddTab("ReactDashboard", "ReactDash", "_last");
			dashTab.Visible = true;
			dashTab.Events.Register(MFiles.Event.TabSelected, async function () {
				const config = await getConfig(shellUI.Vault);
				const dashData: ICustomDashboardData = { config, dashboardId, shellUI, shellPaneContainer: shellFrame.RightPane, vault: shellUI.Vault, shellUIText: "Text passed from the shell UI" };
				DashboardLauncher.ShowTab(shellFrame.RightPane, dashTab, dashboardId, dashData);
			});
		}
	}
};