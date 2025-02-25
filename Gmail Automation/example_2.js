function labelEmails() {
  var label = GmailApp.createLabel("Important");
  var threads = GmailApp.search("subject:Urgent");
  for (var i = 0; i < threads.length; i++) {
    threads[i].addLabel(label);
  }
}

