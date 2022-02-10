const Car = require("./car");

describe("The Car class", () => {
  let car = new Car();
  test("has four wheels", () => {
    expect(car.wheels).toBe(4);
  });

  test("can fly", () => {
    expect(car.canFly()).toBe(true);
  });

  xtest("bad wheels", () => {
    expect(car.wheels).toBe(3);
  });
});
