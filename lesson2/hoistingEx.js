console.log(bar);

function bar() {
  console.log("world");
}

var bar = "hello";

// raises "TypeError: bar is not a function"
