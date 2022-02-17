function outer() {
  let a = 1;
  let b = 2;
  let c = 3;

  return function inner() {
    console.log(d);
  };
}

const bar = (callback) => {
  let d = 4;
  callback();
};

const innerOutside = outer();
bar(innerOutside);
