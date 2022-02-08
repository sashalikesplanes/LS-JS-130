function makeMultipleLister(number) {
  return function () {
    for (
      let currentMultiple = number;
      currentMultiple < 100;
      currentMultiple += number
    ) {
      console.log(currentMultiple);
    }
  };
}

let lister = makeMultipleLister(17);
lister();
