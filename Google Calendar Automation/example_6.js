function createRecurringEvent() {
  var calendar = CalendarApp.getDefaultCalendar();
  // Create an event that recurs every week for 4 occurrences
  calendar.createEventSeries("Weekly Meeting",
    new Date("2025-03-10T09:00:00"),
    new Date("2025-03-10T10:00:00"),
    CalendarApp.newRecurrence().addWeeklyRule().times(4)
  );
  Logger.log("Recurring event created.");
}

