## assert-lite.js - https://github.com/DarrenSem/assert-lite

Assertion groups made easy via a one-liner function call

Like using `console.assert(but_drastically_improved, [ allowing, multiple, assertions, and, ()=> functions_too ] )`"



```js
// Usage examples:

// var assert = globalThis.assert || module.exports || require("assert-lite");
// const assert = require("./assert-lite.js");  // alternative to package.json devDependencies: { "assert-lite": "file:./" }
const assert = require("assert-lite");

assert.is = (a, e) => Object.is(a, e);

const results = assert([

  () => 1,
  () => 1 == "1",
  ,

  () => 1 === "1",
  [0, "<<< zero should be truthy"],
  [
    t => t.is(null, undefined),
    "\n ^",
    null,
    "should be strictly equal to",
    undefined,
  ],
  null,
  ,

  {},

]);

if (!results.every(Boolean)) {
  console.log("results:", results);
  // (7) [1, true, false, 0, false, null, {}]
  debugger;

};

console.log("\nOut of", results.length, "tests, did correct # of them pass?");
if(results.filter(Boolean).length !== 3) {
  process.exit(1);  // how about no
};
```

