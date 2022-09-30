import * as React from "react";
import "./Sample.dashboard.css";

interface IProps {
	myText: string;
}

/**
 * A sample react component
 */
export function SampleComponent(props: IProps): React.ReactElement {
	// Return the rendered content.
	return (
		<div className="SampleDashboard">
			This is a sample dashboard: {props.myText}
		</div>
	);
}
