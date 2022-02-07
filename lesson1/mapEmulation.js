function map(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]));
  }
  return results;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, (number) => number + 1)); // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, (value) => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
