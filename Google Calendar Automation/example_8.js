function advancedEventSearch() {
  var calendar = CalendarApp.getDefaultCalendar();
  // Find events with "Meeting" in title during a specific period
  var events = calendar.getEvents(new Date("2025-03-01"), new Date("2025-03-31"), {search: "Meeting"});
  Logger.log("Meetings in March: " + events.length);
}

