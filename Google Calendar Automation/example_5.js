function setEventReminders() {
  var calendar = CalendarApp.getDefaultCalendar();
  var event = calendar.createEvent("Reminder Event",
    new Date("2025-03-05T14:00:00"),
    new Date("2025-03-05T15:00:00"));
  event.addPopupReminder(10); // Reminder 10 minutes before
  Logger.log("Reminder added.");
}

