"use strict";

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.com/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function forEach(callback, thisArg) {
    'use strict';
    var T, k;

    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    var kValue,
        // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
        O = Object(this),

        // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        len = O.length >>> 0; // Hack to convert O.length to a UInt32

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if ({}.toString.call(callback) !== "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length >= 2) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as the this value and
        // argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}


if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
//  Does not work with `new funcA.bind(thisArg, args)`
if (!Function.prototype.bind) (function(){
  var slice = Array.prototype.slice;
  Function.prototype.bind = function() {
    var thatFunc = this, thatArg = arguments[0];
    var args = slice.call(arguments, 1);
    if (typeof thatFunc !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - ' +
             'what is trying to be bound is not callable');
    }
    return function(){
      var funcArgs = args.concat(slice.call(arguments))
      return thatFunc.apply(thatArg, funcArgs);
    };
  };
})();

/**
 * Creates a polyfill for basic use.
 * Exectutes a method after the specified delay.
 * NOTE: This implementation does not support additional optional params after delay.
 * @param {function} callback - The method to trigger after the delay.
 * @param {number} [delay] - The time in milliseconds that should pass before executing the method.
 * @returns {number} - The timeout id which can be used to cancel the timer.
 */
if ( typeof setTimeout == 'undefined' ) {
	setTimeout = function ( 
			callback, 
			delay ) {

		// Set the delay if it wasn't passed.
		if( delay === undefined ) {
			delay = 0;
		}

		// Delegate to MFiles.SetTimer().
		return MFiles.SetTimer( delay, callback );
	}
}

/**
 * Creates a polyfill for basic use.
 * Cancels a scheduled timer created with setTimeout().
 * @param {number} timeoutID - The timer handle returned from a previous call to setTimeout().
 */
if ( typeof clearTimeout == 'undefined' ) {
	clearTimeout = function ( timeoutID ) {

		try {

			// Delegate to MFiles.KillTimer()
			MFiles.KillTimer( timeoutID );

		} catch( ex ) {

			// We swallow exceptions here.
			// M-Files throws execptions if the timeout is invalid or the timer has already executed,
			// default javascript implementation does not.
		}
	}
}

/**
 * Polyfill for Array.indexOf()
 * Returns the index of an item in an array.
 * @param {*} item - The item to search for.
 * @returns {number} The index of the item if found, otherwise -1.
 */
if(Array.prototype.indexOf == 'undefined' ) {
	Array.prototype.indexOf = function( item ) {

		// Search for the item in the array.
		for( var i = 0; i < this.length; i++ ) {

			// Check if the item at this index is a match.
			if( item === this[ i ] ) {

				// Item found!

				// Return the index.
				return i;
			}
		}

		// The item wasn't found.
		return -1;
	}
}