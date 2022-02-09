function foo(array) {
  let one = array[0];
  let three = array[2];
  return [three, 5, one];
}

let array = [1, 2, 3];
let result = foo(array);
[bar, qux, baz];

let bar = result[0];
let qux = result[1];
let baz = result[2];
