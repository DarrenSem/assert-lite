// assert-lite.js - UMD version - https://github.com/DarrenSem/assert-lite

( function (global, factory, name) {
  if (typeof exports === "object" && typeof module === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    (global || self)[name] = factory();
  };
} )( this, function() {
  var assertMulti = (...args) => {

    var result, test = (fn, ...msg) => (
      ( result = typeof fn == "function" ? fn(assertMulti) : fn ) || (
        console.assert(0, fn, ...msg), result
      )
    );

    return ( args.flat(1).map( fn =>
      Array.isArray(fn) ? test(...fn) : test(fn)
    ) );

  };

  return assertMulti;
}, "assert" );

// .min.js = 343 bytes (function(a,b,c){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):(a||self)[c]=b()})(this,function(){var a=(...b)=>{var c,d=(b,...d)=>(c="function"==typeof b?b(a):b)||(console.assert(0,b,...d),c);return b.flat(1).map(a=>Array.isArray(a)?d(...a):d(a))};return a},"assert");
