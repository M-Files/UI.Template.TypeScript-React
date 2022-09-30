/**
 * Information on how to load a wrapped dashboard.
 */
export interface IDashboardDefinition {

	/**
	 * Path to a script to use to load into an empty (bare html skeleton) dashboard.
	 */
	path: string;

	/**
	 * The name of the type to initialize.
	 * NOTE: Not currently used.
	 */
	type: string;

	/**
	 * Show the tab after a specific tab.
	 * - Defaults to "_last"
	 */
	showAfter?: string;
}
