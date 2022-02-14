class Diamond {
  static makeDiamond(letter) {
    let result = "";
    const maxRowIndex = letter.charCodeAt() - "A".charCodeAt();
    for (let row = 0; row <= maxRowIndex; row++) {
      result += this.makeRow(row, maxRowIndex);
    }
    for (let row = maxRowIndex - 1; row >= 0; row--) {
      result += this.makeRow(row, maxRowIndex);
    }
    return result;
  }

  static addSpacing(row, rowIdx, maxRowIndex) {
    return (
      " ".repeat(maxRowIndex - rowIdx) +
      row +
      " ".repeat(maxRowIndex - rowIdx) +
      "\n"
    );
  }

  static makeRow(rowIndex, maxRowIndex) {
    let row;
    if (rowIndex === 0) row = "A";
    else {
      const currentLetter = String.fromCharCode("A".charCodeAt() + rowIndex);
      row = currentLetter + " ".repeat(rowIndex * 2 - 1) + currentLetter;
    }
    return this.addSpacing(row, rowIndex, maxRowIndex);
  }
}
console.log(Diamond.makeDiamond("D"));
module.exports = Diamond;
