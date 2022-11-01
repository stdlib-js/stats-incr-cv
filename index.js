// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,l=r.__defineSetter__,i=r.__lookupGetter__,u=r.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,c){var a,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(i.call(t,e)||u.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=c.value,t.__proto__=a):t[e]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,c.get),y&&l&&l.call(t,e,c.set),t};function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(t){var e,r,n,o,l;if(null==t)return b.call(t);r=t[_],l=_,e=null!=(o=t)&&s.call(o,l);try{t[_]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[_]=r:delete t[_],n}:function(t){return b.call(t)},m=Number,g=m.prototype.toString,v=y();function h(t){return"object"==typeof t&&(t instanceof m||(v?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===d(t)))}function j(t){return f(t)||h(t)}function S(t){return t!=t}function w(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}a(j,"isPrimitive",f),a(j,"isObject",h);var O=Math.sqrt;return function(t){var e,r,n,o;if(n=0,o=0,arguments.length){if(!f(t))throw new TypeError(w("0dVA8",t));return r=t,i}return r=0,l;function l(t){return 0===arguments.length?0===o?null:1===o?S(n)?NaN:0/r:O(n/(o-1))/r:(n+=(e=t-r)*(t-(r+=e/(o+=1))),o<2?S(n)?NaN:0/r:O(n/(o-1))/r)}function i(t){return 0===arguments.length?0===o?null:O(n/o)/r:O((n+=(e=t-r)*e)/(o+=1))/r}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).incrcv=e();
//# sourceMappingURL=index.js.map
