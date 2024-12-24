"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(g,t){
var c=require('@stdlib/stats-base-dmeanpn/dist');function y(e,r,a){return c(e,r,a)}t.exports=y
});var v=i(function(h,s){
var x=require('@stdlib/stats-base-dmeanpn/dist').ndarray;function f(e,r,a,p){return x(e,r,a,p)}s.exports=f
});var m=i(function(k,q){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=u(),l=v();j(d,"ndarray",l);q.exports=d
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=m(),n,o=_(R(__dirname,"./native.js"));E(o)?n=O:n=o;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
