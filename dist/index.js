"use strict";var o=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var f=o(function(p,v){
var m=require('@stdlib/assert-is-number/dist').isPrimitive,s=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),a=require('@stdlib/math-base-special-sqrt/dist');function q(n){var e,r,t,u;if(t=0,u=0,arguments.length){if(!m(n))throw new TypeError(g('1HD9X',n));return r=n,c}return r=0,l;function l(i){return arguments.length===0?u===0?null:u===1?s(t)?NaN:0/r:a(t/(u-1))/r:(u+=1,e=i-r,r+=e/u,t+=e*(i-r),u<2?s(t)?NaN:0/r:a(t/(u-1))/r)}function c(i){return arguments.length===0?u===0?null:a(t/u)/r:(u+=1,e=i-r,t+=e*e,a(t/u)/r)}}v.exports=q
});var N=f();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
