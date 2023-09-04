// assert-lite.global.js - standalone global/minified version - https://github.com/DarrenSem/assert-lite

var assert = (...args) => {

  var result, test = (fn, ...msg) => (
    ( result = typeof fn == "function" ? fn(assert) : fn ) || (
      console.assert(0, fn, ...msg), result
    )
  );

  return ( args.flat(1).map(fn =>
    Array.isArray(fn) ? test(...fn) : test(fn)
  ) );

};

// min = 147 bytes: A=(...a)=>{var b,c=(a,...c)=>(b="function"==typeof a?a(A):a)||(console.assert(0,a,...c),b);return a.flat(1).map(a=>Array.isArray(a)?c(...a):c(a))};
