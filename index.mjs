// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";function n(n){var i,m,d,l;if(d=0,l=0,arguments.length){if(!t(n))throw new TypeError(e("1HD9X,Hv",n));return m=n,h}return m=0,o;function o(t){return 0===arguments.length?0===l?null:1===l?s(d)?NaN:0/m:r(d/(l-1))/m:(d+=(i=t-m)*(t-(m+=i/(l+=1))),l<2?s(d)?NaN:0/m:r(d/(l-1))/m)}function h(t){return 0===arguments.length?0===l?null:r(d/l)/m:r((d+=(i=t-m)*i)/(l+=1))/m}}export{n as default};
//# sourceMappingURL=index.mjs.map
