function demoFunc(...args) {
  return [args.shift(), args.pop(), args.sort()];
}

let [first, last, middle] = demoFunc("ass", "sasha", "hello", "bob", "adele");
console.log(first, last, middle);
