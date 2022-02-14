class Diamond {
  static makeDiamond(letter) {
    let result = "";
    const maxRowIndex = letter.charCodeAt() - "A".charCodeAt();
    for (let row = 0; row <= maxRowIndex; row++) {
      result += " ".repeat(maxRowIndex - row);
      result += Diamond.makeRow(row);
      result += " ".repeat(maxRowIndex - row) + "\n";
    }
    return result;
  }

  static makeRow(index) {
    if (index === 0) return "A";
    else {
      const currentLetter = String.fromCharCode("A".charCodeAt() + index);
      return currentLetter + " ".repeat(index * 2 - 1) + currentLetter;
    }
  }
}
console.log(Diamond.makeDiamond("D"));
module.exports = Diamond;
