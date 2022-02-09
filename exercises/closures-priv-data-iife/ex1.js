"use strict";

function myBind(func, context, ...argsInitial) {
  return (...args) => {
    return func.call(context, ...argsInitial, ...args);
  };
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d() {
    console.log(this.a + this.b);
    return this.a + this.c;
  },
};

const funcBoundOnObj = myBind(
  function (arg1, arg2, arg3, arg4) {
    console.log(this[arg1]);
    console.log(this[arg2]);
    console.log(this[arg3]);
    console.log(this[arg4]);
  },
  obj,
  "d",
  "a"
);

funcBoundOnObj("b", "c");

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
