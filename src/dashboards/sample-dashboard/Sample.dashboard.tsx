import 'core-js/actual'; // In MFDesktop needed at least to polyfill Symbol used by react
import "MFiles";
import * as React from "react";
import { HandleNewDashboard } from "../HandleNewDashboard";
import { SampleComponent } from "./SampleComponent";
import "./Sample.dashboard.css";
import { ICustomDashboardData } from "../../core/interface/ICustomDashboardData";

/**
 * Implements a React / TypeScript dashboard.
 */
export default function SampleDashboard(props: ICustomDashboardData): React.ReactElement {
	// Return the rendered content.
	return (
		<div>
			{props.shellUIText}
			<SampleComponent myText="some text passed to the component" />
			<p>Properties resolved in Shell UI</p>
			<ul>
				<li>My property1 ID: {props.config.structure.properties.myProperty1}</li>
				<li>My property2 ID: {props.config.structure.properties.myProperty2}</li>
				<li>My class ID: {props.config.structure.classes.myClass1}</li>
			</ul>
		</div>
	);
}

/**
 * Required registration of the OnNewDashboard handler for the window object.
 * - This is the logic that initializes the React components.
 */
declare let window: IMFilesDashboardWindow;
window.OnNewDashboard = HandleNewDashboard.bind(null, SampleDashboard);