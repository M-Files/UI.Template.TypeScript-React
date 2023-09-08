import * as React from "react";
import * as ReactDOM from "react-dom";
import { ICustomDashboardData } from "../core/interface/ICustomDashboardData";
require("./console-dashboard");

declare let console: IMFilesDesktopConsole;

/**
 * Required registration of the OnNewDashboard handler for the window object.
 * - This is the logic that initializes the React components.
 */
export const HandleNewDashboard = (dashboardComponent: React.FunctionComponent<any> | React.ComponentClass<any>, dashboard: MFilesUI.IDashboard): void => { // eslint-disable-line @typescript-eslint/no-explicit-any
	const dashboardId = "dashboardId";
	// Create the container for the react components.
	document.body.innerHTML = `<div id='${dashboardId}'></div>`;
	const container = document.getElementById(dashboardId) as HTMLElement;

	// Create and render the dashboard component.
	const props = dashboard.CustomData as ICustomDashboardData;

	function hasShellFrame(object: MFilesUI.IShellPaneContainer | MFilesUI.IVaultUI | MFilesUI.IShellUI | MFilesUI.IShellFrame): object is MFilesUI.IShellPaneContainer {
		return 'ShellFrame' in object;
	}

	if (dashboard.Parent && hasShellFrame(dashboard.Parent)) {
		console.initialize(dashboard.Parent.ShellFrame.ShellUI, props.__dashboardLoaderData?.id.toString() ?? "");
	}

	ReactDOM.render(React.createElement(dashboardComponent, props), container);

	// Dispose of the Dashboard when the dashboard stops.
	dashboard.Events.Register(MFiles.Event.Stop, () => {
		ReactDOM.unmountComponentAtNode(container);
	});
};