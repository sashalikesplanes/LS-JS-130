class Car {
  constructor() {
    this.wheels = 4;
    this.mileageInfo = null;
  }

  canFly() {
    return true;
  }

  fly() {
    throw Error("cannot fly yet");
  }
}

module.exports = Car;
