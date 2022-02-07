function forEach(arr, callbackfn) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    callbackfn(arr[i]);
  }
}

let arr = [1, 2, 3, 4];

// Array.prototype.forEach
arr.forEach((value) => console.log(value * value));

// Our forEach function
forEach(arr, (value) => console.log(value * value));
