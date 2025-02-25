function searchEmails() {
  var threads = GmailApp.search("from:someone@example.com");
  Logger.log("Found " + threads.length + " thread(s).");
}

