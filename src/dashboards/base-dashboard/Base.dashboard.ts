import "MFilesDashboard";
import { ICustomDashboardData } from "../../core/interface/ICustomDashboardData";
import { IDashboardDefinition } from "../../core/interface/IDashboardDefinition";
import { IDashboardLoaderData } from "../../core/interface/IDashboardLoaderData";

// We declare MFiles here instead of importing it,
// otherwise we run into a chicken/egg issue when
// the webpack bundle.
declare const MFiles: MFilesUI.ICommonFunctions;

// Make sure the window object we use has the M-Files object.
declare let window: IMFilesDashboardWindow;

/**
 * Entry point for an M-Files dashboard.
 * Creates an inner iframe, and loads a custom dashboard inside of this generic one.
 * The relative url should be passed via the dashboard's CustomData attribute.
 * @param dashboard
 */
window.OnNewDashboard = (dashboard: MFilesUI.IDashboard): void => {
	setTimeout(() => {
		new BaseDashboard(dashboard);
	}, 0);
};

/**
 * A plain dashboard wrapper that allows loading any dashboard, without registering
 * it in the applications appdef.xml file.
 */
export class BaseDashboard {

	/**
	 * The dashboard in which this is running.
	 */
	private dashboard: MFilesUI.IDashboard;

	/**
	 * The data the dashboard was initilized with.
	 */
	private customData: ICustomDashboardData;

	/**
	 * The dashboard loading data the dashboard was initialized with.
	 * Indicates which custom-dashboard this base-dashboard should load/wrap.
	 */
	private data: IDashboardLoaderData;

	/**
	 * Unique dashboard id.
	 */
	private id: number;

	/**
	 * Constructor.
	 * @param dashboard - The current dashboard object.
	 */
	constructor(
		dashboard: MFilesUI.IDashboard
	) {
		const customData = dashboard.CustomData as ICustomDashboardData;

		// Sanity checks.
		if (!dashboard) {
			throw new Error("Null argument: dashboard");
		} else if (!customData || !customData.__dashboardLoaderData) {
			throw new Error("Missing dashboard loader data.");
		}

		// Set members.
		this.dashboard = dashboard;
		this.customData = customData;
		if (this.customData.__dashboardLoaderData === undefined)
			throw new Error("Missing data provided to base dashboard.");

		this.data = this.customData.__dashboardLoaderData;
		this.id = this.data.id;

		// Trigger the dashboard started callback if one was defined.
		if (typeof this.data.onDashboardStarted === "function") {
			this.data.onDashboardStarted(dashboard);
		}

		/**
		 * Having this empty event handler in place prevents UI freeze
		 * when selecting different objects right after the dashboard launches
		 * (at least in version 20_8_9339_5_EV)
		 */
		dashboard.Events.Register(MFiles.Event.Stop, () => { /* no action needed */ });

		// Load the dashboard.
		this.loadDashboard();
	}

	/**
	 * Loads the dashboard that this base dashboard should wrap.
	 */
	private loadDashboard(): void {

		// Analyze the source data provided to determine what dashboard
		// to wrap, and how to load it.
		const source = this.data.source;
		if (typeof source === "string") {

			// A source path was passed.

			// Determine if the source path has an extension.
			if (source.indexOf(".") === -1) {

				// No file extension.

				// The source is a short hand script:
				// - Use the default file and type names.
				this.loadScriptSource({
					path: source + ".dashboard.bundle.js",
					type: source + "Dashboard"
				});

			} else {

				// Actual path was passed: Source is an html source.
				this.loadHtmlSource(source);
			}

		} else {

			// Source is fully defined script source definition.
			this.loadScriptSource(source);
		}
	}

	/**
	 * Creates an iframe to contain the wrapped dashboard.
	 * @param src - The source of the iframe.
	 * @returns - The newly created iframe element, already attached to the dashboard.
	 */
	private createIFrame(
		src: string
	): HTMLIFrameElement {

		// Create a full-size dashboard with the passed source, and attach it to the document.
		const iframe: HTMLIFrameElement = document.createElement("iframe");
		iframe.src = src;
		iframe.setAttribute("style", "position:absolute; top:0px; left:0px; bottom:0px; right:0px;" +
			" border:0px; margin:0px; min-width:100%; min-height:100%;");
		document.body.appendChild(iframe);

		// Return the new iframe.
		return iframe;
	}

	/**
	 * Copies the M-Files dashboard environment of the base dashboard into the iframe used
	 * by the dashboard it is wrapping.
	 * @param iframe - The iframe element to inject the environment into.
	 */
	private injectMFilesEnvironment(
		iframe: HTMLIFrameElement
	): void {

		// Cast the inner iframe window as "any" so that we
		// can interact with the non-standard M-Files parts of it.
		const win = iframe.contentWindow as IMFilesDashboardWindow;

		// Set the outer dashboard's title, (and the window Title if we are popped out),
		// based on the wrapped dashboard title.
		document.title = win.document.title;
		if (this.dashboard.Window) {
			this.dashboard.Window.Title = win.document.title;
		}

		// Copy the M-Files object to the inner-dashboard.
		win.MFiles = MFiles;

		// Add any global values starting with MF in this dashboard to the wrapped dashboard.
		for (const prop in window) {
			if (prop.indexOf("MF") === 0) {
				win[prop] = window[prop];
			}
		}
	}

	/**
	 * Initializes the wrapped dashboard using a simple source path.
	 * @param url - Filepath.
	 */
	private loadHtmlSource(
		url: string
	): void {

		const iframe = this.createIFrame(url);

		// Setup a callback for the wrapped dashboard once it loads.
		iframe.onload = (): void => {

			// Copy the M-File dashboard environment into the iframe.
			this.injectMFilesEnvironment(iframe);

			// Trigger the wrapped dashboard's OnNewDashboard method to initialize it.
			this.triggerMFilesDashboardEntryPoint(iframe);
		};

	}

	/**
	 * Initializes an empty (bare html structure) wrapped dashboard using only
	 * a javascript source file and a type name to initalize.
	 * @param def - The definition of the dashboard to wrap.
	 */
	private loadScriptSource(
		def: IDashboardDefinition
	): void {

		// Create an empty iframe.
		const iframe = this.createIFrame("Empty.dashboard.html");

		// Wait for the iframe to fully load.
		iframe.onload = (): void => {

			// Inject the M-Files environemnt into the iframe.
			// Note it is important we do this before including the script!
			this.injectMFilesEnvironment(iframe);

			// Initialize a script tag to load the wrapped dashboard script.
			if (iframe.contentWindow === null)
				throw new Error("Error loading iframe content window.");
			const doc = iframe.contentWindow.document;
			const script = doc.createElement("script");
			doc.head.appendChild(script);

			// Add a listener to the script so we can trigger
			// the entry point once it has loaded.
			script.onload = (): void => {

				// Initialize entry point.
				this.triggerMFilesDashboardEntryPoint(iframe);
			};

			// Listen for any issues loading the script.
			script.onerror = (err: string | Event): void => { // eslint-disable-line @typescript-eslint/no-unused-vars

				// Script failed to load.
				alert("Error loading script. " + script.src);
			};

			// Set the script source, so it begins loading.
			script.src = def.path;
		};

	}

	/**
	 * Triggers the default M-Files entry point in an iframe, if one is defined.
	 * @param iframe - The iframe to trigger the entry point in.
	 */
	private triggerMFilesDashboardEntryPoint(
		iframe: HTMLIFrameElement
	): void {

		// Check if an entry point is defined.
		const win = iframe.contentWindow as IMFilesDashboardWindow;
		if (win.OnNewDashboard) {

			// Entry point defined. Trigger it.
			win.OnNewDashboard(this.dashboard);

		} else {

			// No entry point defined, we can't initalize the dashboard.

			// Don't throw an exception, maybe it is just static!?
			// throw new Error( "No entry point found." );
		}
	}

}
