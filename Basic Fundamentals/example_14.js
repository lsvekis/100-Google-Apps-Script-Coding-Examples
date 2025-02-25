function formatDateDemo() {
  var now = new Date();
  var formatted = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
  Logger.log("Formatted date: " + formatted);
}

