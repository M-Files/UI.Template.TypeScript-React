import "MFiles";
import { IDashboardDefinition } from "./IDashboardDefinition";

/**
 * Data that must be pashed to the BaseDashboard so it can
 * successfully load a wrapped dashboard.
 */
export interface IDashboardLoaderData {

	/**
	 * The unique id of the dashboard.
	 */
	id: number;

	/**
	 * The source/definition of the dashboard to load/wrap.
	 */
	source: string | IDashboardDefinition;

	/**
	 * The shellUI in which the dashboard will run.
	 */
	shellUI?: MFilesUI.IShellUI;

	/**
	 * The shellFrame in which the dashboard will run, if applicable.
	 */
	shellFrame?: MFilesUI.IShellFrame;

	/**
	 * The container (pane) in which the dashboard will run, if applicable.
	 */
	container?: MFilesUI.IShellPaneContainer;

	/**
	 * The tab in which the dashboard will run, if applicable.
	 */
	tab?: MFilesUI.IShellPaneTab;

	/**
	 * Callback to be triggered once the dashboard starts.
	 * This provides the dashboard object so closing can be detected,
	 * or even triggered externally.
	 */
	onDashboardStarted?: ( dashboard: MFilesUI.IDashboard ) => void;
}
