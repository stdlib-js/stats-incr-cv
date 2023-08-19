"use strict";var o=function(n,u){return function(){return u||n((u={exports:{}}).exports,u),u.exports}};var f=o(function(p,v){
var m=require('@stdlib/assert-is-number/dist').isPrimitive,s=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),a=require('@stdlib/math-base-special-sqrt/dist');function q(n){var u,r,t,e;if(t=0,e=0,arguments.length){if(!m(n))throw new TypeError(g('1HD9X',n));return r=n,c}return r=0,l;function l(i){return arguments.length===0?e===0?null:e===1?s(t)?NaN:0/r:a(t/(e-1))/r:(e+=1,u=i-r,r+=u/e,t+=u*(i-r),e<2?s(t)?NaN:0/r:a(t/(e-1))/r)}function c(i){return arguments.length===0?e===0?null:a(t/e)/r:(e+=1,u=i-r,t+=u*u,a(t/e)/r)}}v.exports=q
});var N=f();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
