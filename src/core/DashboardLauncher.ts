import "MFiles";
import { ICustomDashboardData } from "./interface/ICustomDashboardData";
import { IDashboardDefinition } from "./interface/IDashboardDefinition";
import { IDashboardLoaderData } from "./interface/IDashboardLoaderData";

/**
 * Helper method for launch "wrapped" dashboards.
 * Wrapped dashboards are those that aren't defined in an applications appdef.xml file.
 * The dashboard launcher launches a base dashboard that then loades the "wrapped"
 * dashboard into a full-sized inner iframe.
 *
 * Wrapped dashboards are defined with a simple html source path (relative to the application
 * root) or else an IDashboardDefinition that contains the path to a javascript file
 * which will be loaded into an empty dashboard, and then initialized.
 */
export class DashboardLauncher {

	/**
	 * Used to generate a simple unique dashboard id for each dashboard launched.
	 */
	private static lastID = 0;

	/**
	 * Displays a wrapped dashboard in a popup window.
	 * @param parent - The parent of the popup.
	 * @param source - The source/definition of the wrapped dashboard.
	 * @param modal - Indicates whether the popup should be modal.
	 * @param data - Any extra custom data to pass to the dashboard.
	 * @param onDashboardStarted - An optional callback to recieve the dashboard object once it starts.
	 */
	public static ShowPopup(
		parent: MFilesUI.IShellFrame | MFilesUI.IShellUI,
		source: string | IDashboardDefinition,
		modal = false,
		data: ICustomDashboardData,
		onDashboardStarted?: MFilesUI.NewDashboardEventHandler
	): void {

		// Initialize the loader data to be passed to the base dashboard,
		// so it has everything it needs to load the wrapped dashboard.
		const dashData: IDashboardLoaderData = data.__dashboardLoaderData || {
			id: this.lastID++,
			source,
			onDashboardStarted
		};
		data.__dashboardLoaderData = dashData;

		// Do some feature checking to determine what type of parent the
		// dashboard has, so we can setup some environment varibles for the
		// base dashboard to recieve.
		if (Object.prototype.hasOwnProperty.call(parent, "Commands")) {

			// Parent is shellFrame.
			dashData.shellFrame = parent as MFilesUI.IShellFrame;
			dashData.shellUI = dashData.shellFrame.ShellUI;

		} else {

			// Parent is shellui.
			dashData.shellUI = parent as MFilesUI.IShellUI;
		}

		// Launch the dashboard.
		parent.ShowPopupDashboard("base-dashboard", modal, data);
	}

	/**
	 * Displays a wrapped dashboard in a shell pane container tab.
	 * @param container - The container in which the dashboard will be shown.
	 * @param tab - The tab in which the dashboard will be shown.
	 * @param source - The source/definition of the wrapped dashboard.
	 * @param data - Any extra custom data to pass to the dashboard.
	 * @param onDashboardStarted - An optional callback to recieve the dashboard object once it starts.
	 */
	public static ShowTab(
		container: MFilesUI.IShellPaneContainer,
		tab: MFilesUI.IShellPaneTab,
		source: string | IDashboardDefinition,
		data: ICustomDashboardData,
		onDashboardStarted?: (dashboard: MFilesUI.IDashboard) => void
	): void {

		// Initialize the loader data to be passed to the base dashboard,
		// so it has everything it needs to load the wrapped dashboard.
		const dashData: IDashboardLoaderData = data.__dashboardLoaderData || {
			id: this.lastID++,
			source,
			container,
			shellFrame: container.ShellFrame,
			shellUI: container.ShellFrame.ShellUI,
			tab,
			onDashboardStarted
		};

		// Do not modify variable data directly since that might be reused outside this method.
		const filledDashData = { ...data };
		filledDashData.__dashboardLoaderData = dashData;

		// Launch the dashboard.
		tab.ShowDashboard("base-dashboard", filledDashData);
	}
}
