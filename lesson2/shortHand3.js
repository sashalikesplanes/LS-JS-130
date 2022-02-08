function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let temp = foo(1, 2, 3);
let bar = temp.bar;
let baz = temp.baz;
let qux = temp.qux;
