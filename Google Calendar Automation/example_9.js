function notifyEventCreation() {
  var calendar = CalendarApp.getDefaultCalendar();
  var event = calendar.createEvent("Notified Event",
    new Date("2025-04-01T10:00:00"),
    new Date("2025-04-01T11:00:00"));
  MailApp.sendEmail("recipient@example.com", "New Event Created", "An event titled '" + event.getTitle() + "' was created.");
}

