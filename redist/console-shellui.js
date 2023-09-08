"use strict";

/**
 * Create a global console object available in a shellui module.
 *
 * Initially the console implementation is a sham, but calling
 * console.initialize( shellUI, source ) once the shellUI object
 * becomes available will attempt to implement a real console
 * if another running application implements one.
 *
 * @implements {Console}
 */
var console = ( function() {

	// Create an empty method for implementing the 
	// methods of a sham console interface.
	var noop = function() {};

	// Check if we are running in web.
	if( MFiles.CurrentApplicationPlatform === MFExtApplicationPlatformWeb ) {

		// The browser's console should already be available if we are running in the web.

		// Implement a sham initialize method on the window's console object.
		window.console.initialize = function() { };

		// Return the browser's console.
		return window.console;
	}

	/**
	 * Triggers the callback when the shellUI is ready.
	 * @param {MFilesUI.IShellUI} shellUI - The shellUI object.
	 * @param {function} callback - The callback to trigger.
	 */
	function onShellUIReady( 
			shellUI, 
			callback ) {
		
		try {
			
			// Try to access the vault.
			// This will throw an error if the shellUI isn't ready.
			var v = shellUI.Vault;

			// ShellUI is ready, run the callback.
			callback();

		} catch( e ) { 
		
			// ShellUI isn't ready, schedule the callback for when the shellUI starts.
			shellUI.Events.Register( MFiles.Event.Started, callback );
		}
	}

	// Return the sham console interface, with an intialize method,
	// that is capable of implementing a real console object.
	return {

		/**
		 * Provides the means to initialize a real console once the
		 * shellUI is available.
		 * @param {MFilesUI.IShellUI} shellUI - The shellUI in which this code is running.
		 * @param {string} source - The name of the source console entries will appear to come from.
		 */
		initialize: function( 
				shellUI, 
				source ) {

			// Make sure the client supports cross application communication.
			if( MFiles.Event.CrossApplicationBroadcast ) {
				
				// Setup the console once the shellUI is ready.
				onShellUIReady( shellUI, function() {

					// Broadcast a requests for an application to provide a console implementation.
					var data = { source: source };
					shellUI.BroadcastMessage( "Console.GetSink", data );

					// Replace the global console object with 
					// the implementation returned, if any.
					if( data.sink ) {
						console = data.sink;
					}
				} );
			}
		},

		// Implementing empty interface below this point.
		// NOTE: Intentionally skipping proper commenting!
		assert: noop,
		clear: noop,
		count: noop,
		debug: noop,
		dir: noop,
		dirxml: noop,
		error: noop,
		exception: noop,
		group: noop,
		groupCollapsed: noop,
		groupEnd: noop,
		info: noop,
		log: noop,
		profile: noop,
		profileEnd: noop,
		table: noop,
		time: noop,
		timeStamp: noop,
		trace: noop,
		warn: noop
	};

} )();