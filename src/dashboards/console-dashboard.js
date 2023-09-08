"use strict";

/**
 * Adds an initialize( shellUI, source) method to a dashboard window's console object.
 * Calling this method once the shellUI becomes available will replace the window's
 * console object with one implemented by another shellUI application, if available.
 */
( function() {

	/**
	 * Provides the means to initialize a real console once the
	 * shellUI is available.
	 * @param {MFilesUI.IShellUI} shellUI - The shellUI in which this code is running.
	 * @param {string} source - The name of the source console entries will appear to come from.
	 */
	function initialize( 
			shellUI, 
			source ) {

		// Leave the console be if we are running in the web.
		if( MFiles.CurrentApplicationPlatform === MFExtApplicationPlatformWeb ) {
			return;
		}

		// Make sure the client supports cross application communication.
		if( MFiles.Event.CrossApplicationBroadcast ) {

			// Broadcast a requests for an application to provide a console implementation.
			var data = { source: source };
			shellUI.BroadcastMessage( "Console.GetSink", data );

			// Replace the global console object with 
			// the implementation returned, if any.
			if( data.sink ) {
				window.console = data.sink;
			}
		}
	}

	// Add the initialize method to the Console prototype.
	if (typeof Console !== 'undefined' && Console.prototype)
	{
		Object.defineProperty(
			Console.prototype,
			"initialize",
			{
				enumerable: false,
				writable: false,
				value: initialize
			} );
	}
	else
	{
		if (window && window.console)
		{
			// Call initialize function when console is initialized.
			window.console.initialize = initialize;
		}
	}
} )();