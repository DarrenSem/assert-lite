// assert-lite.esm.js - ESM ES6 module version - https://github.com/DarrenSem/assert-lite

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

export default assert;
