function addGuestToEvent() {
  var calendar = CalendarApp.getDefaultCalendar();
  var events = calendar.getEvents(new Date("2025-03-01T00:00:00"), new Date("2025-03-02T00:00:00"));
  if (events.length > 0) {
    events[0].addGuest("guest@example.com");
    Logger.log("Guest added to event.");
  }
}

