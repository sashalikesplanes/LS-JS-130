class Clock {
  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  constructor(hours, minutes) {
    this.hours = parseInt(hours);
    this.minutes = parseInt(minutes) || 0;
  }

  toString() {
    const hoursStr = String(this.hours).padStart(2, "0");
    const minutesStr = String(this.minutes).padStart(2, "0");
    return `${hoursStr}:${minutesStr}`;
  }

  add(minutes) {}
  subtract(minutes) {}
}

module.exports = Clock;
