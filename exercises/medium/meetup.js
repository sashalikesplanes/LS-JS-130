"use strict";
class Meetup {
  constructor(year, monthNum) {
    this.year = year;
    this.month = monthNum - 1;
  }
  day(weekday, timing) {
    const meetupDate = new Date(this.year, this.month, 1);
    const weekdayIdx = getWeekdayIdx(weekday);
    switch (timing.toLowerCase()) {
      case "first":
        return findFirstDayStartingAt(meetupDate, 1, weekdayIdx);
      case "second":
        return findFirstDayStartingAt(meetupDate, 8, weekdayIdx);
      case "third":
        return findFirstDayStartingAt(meetupDate, 15, weekdayIdx);
      case "fourth":
        return findFirstDayStartingAt(meetupDate, 22, weekdayIdx);
      case "fifth":
        return findFirstDayStartingAt(meetupDate, 29, weekdayIdx);
      case "last":
        return findFirstDayStartingAt(meetupDate, -6, weekdayIdx);
      case "teenth":
        return findFirstDayStartingAt(meetupDate, 13, weekdayIdx);
    }
    // set to correct year, start of month
    return meetupDate;
  }

  static findFirstDayStartingAt(meetupDate, startingDate, weekdayIdx) {
    // iterate from 0 to 7 increasing the day and checking if weekday matches
    for (let date = startingDate; date < startingDate + 7; date++) {
      meetupDate.setDate(date);
      if (meetupDate.getDay() === weekdayIdx) return meetupDate;
    }
  }
}

module.exports = Meetup;
