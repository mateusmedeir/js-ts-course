(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===t(i)?i:String(i)),n)}var i}function r(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=new(r((function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.firstName=e,this.lastName=r})))("Mateus","Lopes");console.log(o)})();
//# sourceMappingURL=bundle.js.map