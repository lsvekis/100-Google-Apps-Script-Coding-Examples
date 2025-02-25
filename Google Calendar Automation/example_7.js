function queryEvents() {
  var calendar = CalendarApp.getDefaultCalendar();
  var start = new Date("2025-03-01T00:00:00");
  var end = new Date("2025-03-31T23:59:59");
  var events = calendar.getEvents(start, end);
  Logger.log("Events in March: " + events.length);
}

