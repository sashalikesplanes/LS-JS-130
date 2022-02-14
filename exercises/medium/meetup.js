"use strict";
class Meetup {
  constructor(year, monthNum) {
    this.year = year;
    this.month = monthNum - 1;
  }
  day(weekday, timing) {
    const meetupDate = new Date(this.year, this.month, 1);
    const weekdayIdx = this.getWeekdayIdx(weekday);
    switch (timing.toLowerCase()) {
      case "first":
        return Meetup.findFirstDayStartingAt(meetupDate, 1, weekdayIdx);
      case "second":
        return Meetup.findFirstDayStartingAt(meetupDate, 8, weekdayIdx);
      case "third":
        return Meetup.findFirstDayStartingAt(meetupDate, 15, weekdayIdx);
      case "fourth":
        return Meetup.findFirstDayStartingAt(meetupDate, 22, weekdayIdx);
      case "fifth":
        return Meetup.findFirstDayStartingAt(meetupDate, 29, weekdayIdx);
      case "last":
        return Meetup.findFirstDayStartingAt(meetupDate, -6, weekdayIdx);
      case "teenth":
        return Meetup.findFirstDayStartingAt(meetupDate, 13, weekdayIdx);
    }
    // set to correct year, start of month
    return meetupDate;
  }

  getWeekdayIdx(weekday) {
    switch (weekday.toLowerCase()) {
      case "sunday":
        return 0;
      case "monday":
        return 1;
      case "tuesday":
        return 2;
      case "wednesday":
        return 3;
      case "thursday":
        return 4;
      case "friday":
        return 5;
      case "saturday":
        return 6;
    }
  }

  static findFirstDayStartingAt(meetupDate, startingDate, weekdayIdx) {
    // TODO fix fifth and last
    // iterate from 0 to 7 increasing the day and checking if weekday matches
    for (let date = startingDate; date < startingDate + 7; date++) {
      meetupDate.setDate(date);
      // Check if its next month, except if we started at the 1st
      if (date !== startingDate && meetupDate.getDate() === 1) return null;
      if (meetupDate.getDay() === weekdayIdx) return meetupDate;
    }
  }
}

module.exports = Meetup;
