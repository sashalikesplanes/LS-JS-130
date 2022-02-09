"use strict";

function myBind(func, context) {
  return (...args) => {
    return func.call(context, ...args);
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

const funcBoundOnObj = myBind(function (arg1, arg2) {
  return this[arg1]() + this[arg2];
}, obj);

console.log(funcBoundOnObj("d", "b"));
