function createCalendarEvent() {
  var calendar = CalendarApp.getDefaultCalendar();
  var event = calendar.createEvent("Meeting",
    new Date("2025-03-01T10:00:00"),
    new Date("2025-03-01T11:00:00"));
  Logger.log("Event created: " + event.getTitle());
}

