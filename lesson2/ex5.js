let counter = 0;

add = (num) => {
  counter += num;
  console.log(counter);
};

subtract = (num) => {
  counter -= num;
  console.log(counter);
};

add(1); // 1
add(42); // 43
subtract(39); // 4
add(6); // 10
