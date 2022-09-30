import { IDashboardLoaderData } from "./IDashboardLoaderData";
import { Configuration } from "../Configuration";

/**
 * Custom data object passed to dashboards when launching them.
 */
export interface ICustomDashboardData {

	/**
	 * Special key used by the DashboardLauncher/BaseDashboard to load
	 * wrapped dashboards.
	 */
	__dashboardLoaderData?: IDashboardLoaderData;

	shellUIText: string;

	config: Configuration;

	shellUI: MFilesUI.IShellUI;

	shellFrame?: MFilesUI.IShellFrame;

	shellPaneContainer?: MFilesUI.IShellPaneContainer;

	vault: MFilesAPI.Vault;

	dashboardId: string;
}
