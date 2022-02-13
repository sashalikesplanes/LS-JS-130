class PerfectNumber {
  static classify(number) {
    this._validateNumber(number);

    let sumOfFactors = this.sumOfFactors(number);
    if (sumOfFactors < number) return "deficient";
    else if (sumOfFactors > number) return "abundant";
    else return "perfect";
  }

  static _validateNumber(number) {
    if (!Number.isFinite(number)) {
      throw TypeError(`${number} is not a valid number`);
    } else if (number < 1) {
      throw TypeError(`${number} is not a natural number`);
    }
  }

  static sumOfFactors(number) {
    let sum = 0;
    for (let factor = 1; factor < number; factor++) {
      if (number % factor === 0) {
        sum += factor;
      }
    }
    return sum;
  }
}

module.exports = PerfectNumber;
