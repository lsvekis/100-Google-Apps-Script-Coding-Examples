function sendCalendarInvite() {
  var calendar = CalendarApp.getDefaultCalendar();
  var event = calendar.createEvent("Team Meeting",
    new Date("2025-04-10T10:00:00"),
    new Date("2025-04-10T11:00:00"));
  event.addGuest("team@example.com");
  MailApp.sendEmail("team@example.com", "Invitation: Team Meeting", "You are invited to a team meeting.");
}

