class Clock {
  static MINUTES_PER_HOUR = 60;
  static HOURS_PER_DAY = 24;

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

  add(minutes) {
    this.minutes += minutes;
    while (this.minutes >= Clock.MINUTES_PER_HOUR) {
      this.minutes -= Clock.MINUTES_PER_HOUR;
      this.hours += 1;
    }
    while (this.hours >= Clock.HOURS_PER_DAY) {
      this.hours -= Clock.HOURS_PER_DAY;
    }
    return this;
  }
  subtract(minutes) {}
}

module.exports = Clock;
