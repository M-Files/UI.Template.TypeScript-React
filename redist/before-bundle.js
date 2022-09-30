"use strict";

if(MFiles.CurrentApplicationPlatform === 1) {
	var __nativeCallMethod = Function.prototype.call;
	Function.prototype.call = function() {
		
		// Delegate to the native call method for standard behavior.
		var retVal = __nativeCallMethod.apply( this, arguments );

		// Try to detect webpack call and rerun any getters.
		// The getters should be set by our defineProperty sham.
		if( arguments.length > 1 ) {
			var exports = arguments[ 0 ];
			var getters = exports && exports.__getters;
			var moduleName = arguments[ 1 ] && arguments[ 1 ].i;
			if( getters && moduleName ) {
				// MFiles.ReportException( moduleName );
				for( var i = 0; i < getters.length; i++ ) { 
					getters[ i ](); 
				} 
			}
		}

		return retVal;
	};



	Object.prototype.defineProperty = function( obj, name, details ) {

		if( details && typeof details.get === "function" ) {

			// Set the property value with the getter.
			obj[ name ] = details.get();

			// Store the getter so it can be recalculated later.
			obj.__getters = obj.__getters || [];
			obj.__getters.push( function() {
				obj[ name ] = details.get();
			} );
			
		} else if( details && Object.hasOwnProperty.call( details, "value" ) ){
			obj[ name ] = details.value;
		} else {
			name = details;
		}
	}
}

// Declare a global ShellUIModule so it can be injected
// into a module, and have the entry method set (OnNewShellUI).
var ShellUIModule = {};
function OnNewShellUI ( shellUI ) {

	ShellUIModule.OnNewShellUI( shellUI );
}

try {