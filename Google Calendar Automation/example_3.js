function deleteEvent() {
  var calendar = CalendarApp.getDefaultCalendar();
  var events = calendar.getEvents(new Date("2025-03-01T00:00:00"), new Date("2025-03-02T00:00:00"));
  if (events.length > 0) {
    events[0].deleteEvent();
    Logger.log("Event deleted.");
  }
}

