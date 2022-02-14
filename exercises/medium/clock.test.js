const Clock = require("./clock.js");

describe("Clock", () => {
  test("on the hour", () => {
    expect(Clock.at(8).toString()).toBe("08:00");
    expect(Clock.at(9).toString()).toBe("09:00");
  });

  test("past the hour", () => {
    expect(Clock.at(11, 9).toString()).toBe("11:09");
  });

  xtest("add a few minutes", () => {
    let clock = Clock.at(10).add(3);
    expect(clock.toString()).toBe("10:03");
  });

  xtest("subtract fifty minutes", () => {
    let clock = Clock.at(0).subtract(50);
    expect(clock.toString()).toBe("23:10");
  });

  xtest("add over an hour", () => {
    let clock = Clock.at(10).add(61);
    expect(clock.toString()).toBe("11:01");
  });

  xtest("wrap around at midnight", () => {
    let clock = Clock.at(23, 30).add(60);
    expect(clock.toString()).toBe("00:30");
  });

  xtest("add more than a day", () => {
    let clock = Clock.at(10).add(3061);
    expect(clock.toString()).toBe("13:01");
  });

  xtest("subtract a few minutes", () => {
    let clock = Clock.at(10, 30).subtract(5);
    expect(clock.toString()).toBe("10:25");
  });

  xtest("subtract minutes", () => {
    let clock = Clock.at(10).subtract(90);
    expect(clock.toString()).toBe("08:30");
  });

  xtest("equivalent clocks", () => {
    let clock1 = Clock.at(15, 37);
    let clock2 = Clock.at(15, 37);

    expect(clock1.isEqual(clock2)).toBe(true);
  });

  xtest("wrap around at negative midnight", () => {
    let clock = Clock.at(0, 30).subtract(60);
    expect(clock.toString()).toBe("23:30");
  });

  xtest("subtract more than a day", () => {
    let clock = Clock.at(10).subtract(3061);
    expect(clock.toString()).toBe("06:59");
  });

  xtest("inequivalent clocks", () => {
    let clock1 = Clock.at(15, 37);
    let clock2 = Clock.at(15, 36);
    let clock3 = Clock.at(14, 37);

    expect(clock1.isEqual(clock2)).toBe(false);
    expect(clock1.isEqual(clock3)).toBe(false);
  });

  xtest("wrap around backwards", () => {
    let clock = Clock.at(0, 30).subtract(60);
    expect(clock.toString()).toEqual("23:30");
  });
});