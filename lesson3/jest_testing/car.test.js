const Car = require("./car");

describe("The Car class", () => {
  test("has four wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
  });

  test("can fly", () => {
    let car = new Car();
    expect(car.canFly()).toBe(true);
  });
});
