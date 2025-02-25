function getTodaysEvents() {
  var calendar = CalendarApp.getDefaultCalendar();
  var today = new Date();
  var start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  var end = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  var events = calendar.getEvents(start, end);
  Logger.log("Today's events: " + events.length);
}

