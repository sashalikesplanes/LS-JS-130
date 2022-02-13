class Octal {
  constructor(octalString) {
    this.octalString = octalString;
  }

  toDecimal() {
    if (!Octal._validOctalString(this.octalString)) return 0;
    let decimalNum = 0;
    const reverse = this.octalString.split("").reverse();
    reverse.forEach((num, exp) => (decimalNum += num * 8 ** exp));
    return decimalNum;
  }

  static _validOctalString(string) {
    return string.split("").every((char) => "01234567".includes(char));
  }
}

module.exports = Octal;
