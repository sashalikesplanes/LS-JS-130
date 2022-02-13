class Series {
  constructor(input) {
    this.numArr = input.split("").map((digit) => Number(digit));
  }
  slices(length) {
    if (length > this.numArr.length) {
      throw Error("slice length longer than sequence");
    }
    const listOfSlices = [];
    // Iterate over the array until certain end point
    // add to list of slices a slice from current index to desired length + index
    for (let index = 0; index <= this.numArr.length - length; index++) {
      listOfSlices.push(this.numArr.slice(index, index + length));
    }
    return listOfSlices;
  }
}

module.exports = Series;
