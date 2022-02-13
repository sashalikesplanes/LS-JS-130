class SumOfMultiples {
  constructor(...baseMultiples) {
    this.baseMultiples = baseMultiples;
  }

  to(target) {
    return SumOfMultiples.to(target, this.baseMultiples);
  }

  static to(target, baseMultiples = [3, 5]) {
    const allMultiples = this.getAllMultiples(target, baseMultiples);
    return allMultiples.reduce((sum, current) => sum + current, 0); // 0 needed in case empty
    // iterate from smallest multiple to < target
    // if any of numbers divisible by base, add it to list
    // sum the list
  }

  static getAllMultiples(target, baseMultiples) {
    const multiples = [];
    baseMultiples.forEach((baseMultiple) => {
      let currentMultiple = baseMultiple;
      while (currentMultiple < target) {
        if (!multiples.includes(currentMultiple)) {
          multiples.push(currentMultiple);
        }
        currentMultiple += baseMultiple;
      }
    });
    return multiples;
  }
}

module.exports = SumOfMultiples;

let obj = new SumOfMultiples(7, 13, 17);
console.log(obj.to(20));
