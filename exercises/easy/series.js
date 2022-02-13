class Series {
  constructor(input) {
    this.numArr = input.split("").map((digit) => Number(digit));
  }
  slices(length) {
    if (length > this.numArr.length) {
      throw Error("slice length longer than sequence");
    }
    const listOfSlices = [];
    return listOfSlices;
  }
}
