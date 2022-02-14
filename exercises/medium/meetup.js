class Meetup {
  constructor(year, monthNum) {
    this.year = year;
    this.month = monthNum - 1;
  }
  day(weekday, timing) {
    const meetupDate = new Date();
    const weekdayIdx = getWeekdayIdx(weekday);
    meetupDate.setFullYear(this.year);
    meetupDate.setMonth(this.month);
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
}
