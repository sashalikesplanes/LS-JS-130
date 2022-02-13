let SumOfMultiples = require("./sumOfMultiples.js");

describe("sum of multiples", () => {
  test("sum to one", () => {
    expect(SumOfMultiples.to(1)).toEqual(0);
  });

  xtest("sum to three", () => {
    expect(SumOfMultiples.to(4)).toEqual(3);
  });

  xtest("sum to ten", () => {
    expect(SumOfMultiples.to(10)).toEqual(23);
  });

  xtest("sum to one hundred", () => {
    expect(SumOfMultiples.to(100)).toEqual(2_318);
  });

  xtest("sum to one thousand", () => {
    expect(SumOfMultiples.to(1000)).toEqual(233_168);
  });

  xtest("configurable 7 13 17 to 20", () => {
    let obj = new SumOfMultiples(7, 13, 17);
    expect(obj.to(20)).toEqual(51);
  });

  xtest("configurable 4 6 to 15", () => {
    let obj = new SumOfMultiples(4, 6);
    expect(obj.to(15)).toEqual(30);
  });

  xtest("configurable 5 6 8 to 150", () => {
    let obj = new SumOfMultiples(5, 6, 8);
    expect(obj.to(150)).toEqual(4_419);
  });

  xtest("configurable 43 47 to 10,000", () => {
    let obj = new SumOfMultiples(43, 47);
    expect(obj.to(10_000)).toEqual(2_203_160);
  });
});
