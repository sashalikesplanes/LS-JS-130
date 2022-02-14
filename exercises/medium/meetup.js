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
        return setToNthDay(meetupDate, 1, weekday);
      case "second":
        return setToNthDay(meetupDate, 2, weekday);
      case "third":
        return setToNthDay(meetupDate, 3, weekday);
      case "fourth":
        return setToNthDay(meetupDate, 4, weekday);
      case "fifth":
        return setToNthDay(meetupDate, 5, weekday);
      case "last":
        return setToLastDay(meetupDate, weekday);
      case "teenth":
        return setToTeenthDay(meetupDate, weekday);
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
