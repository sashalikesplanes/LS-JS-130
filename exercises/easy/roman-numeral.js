"use strict";
class RomanNumeral {
  constructor(num) {
    this.num = num;
  }

  toRoman() {
    let remaining = String(this.num).split("");
    let romanNum = "";
    let digits = {
      1: "I",
      5: "V",
      10: "X",
      50: "L",
      100: "C",
      500: "D",
      1000: "M",
    };
    while (remaining.length > 0) {
      let currentMultipleOfTen = 10 ** (remaining.length - 1);
      let currentDigit = Number(remaining.shift());
      switch (currentDigit) {
        case 1:
        case 2:
        case 3:
          while (currentDigit > 0) {
            romanNum += digits[currentMultipleOfTen];
            currentDigit -= 1;
          }
          break;
        case 4:
          romanNum +=
            digits[currentMultipleOfTen] + digits[currentMultipleOfTen * 5];
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          romanNum += digits[currentMultipleOfTen * 5];
          currentDigit -= 5;
          while (currentDigit > 0) {
            romanNum += digits[currentMultipleOfTen];
            currentDigit -= 1;
          }
          break;
        case 9:
          romanNum +=
            digits[currentMultipleOfTen] + digits[currentMultipleOfTen * 10];
          break;
      }
    }
    return romanNum;
  }
}

module.exports = RomanNumeral;

let test = new RomanNumeral(14);
console.log(test.toRoman());
test = new RomanNumeral(300);
console.log(test.toRoman());
test = new RomanNumeral(2321);
console.log(test.toRoman());
