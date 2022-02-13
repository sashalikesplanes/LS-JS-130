class PerfectNumber {
  static classify(number) {
    if (!Number.isFinite(number)) {
      throw TypeError(`${number} is not a valid number`);
    } else if (number < 1) {
      throw TypeError(`${number} is not a natural number`);
    }

    let sumOfFactors = 0;
    // Loop over all number from 1 to < number,
    // if number is divible by factor add it to the sum
    for (let factor = 1; factor < number; factor++) {
      if (number % factor === 0) {
        sumOfFactors += factor;
      }
    }
    if (sumOfFactors < number) return "deficient";
    else if (sumOfFactors > number) return "abundant";
    else return "perfect";
  }
}

module.exports = PerfectNumber;
