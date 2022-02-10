const Car = require("./car");

describe("The Car class", () => {
  let car;
  let car2;
  beforeEach(() => {
    car = new Car();
    car2 = new Car();
  });

  test("has four wheels", () => {
    expect(car.wheels).toBe(4);
  });

  test("can fly", () => {
    expect(car.canFly()).toBe(true);
  });

  xtest("bad wheels", () => {
    expect(car.wheels).toBe(3);
  });

  test("object equality", () => {
    expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
  });

  test("item equality with toEqual", () => {
    expect("1").toEqual("1");
  });

  test("car is equal to car2", () => {
    expect(car).toEqual(car2);
  });

  test("raises an error when undefined method is called", () => {
    // needs to be wrapped in a function
    expect(() => car.drive()).toThrow();
  });

  xtest("function passed to expect is automatically called", () => {
    // does not automatically call the function but checks if it throws?
    expect(() => 2).toBe(2);
  });

  test("a method which throws an exception", () => {
    // .toThrow automatically calls function passed to expect
    expect(() => car.fly()).toThrow();
  });
});
