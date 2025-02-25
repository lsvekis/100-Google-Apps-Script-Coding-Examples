function filterAndOrganizeEmails() {
  var threads = GmailApp.search("label:inbox subject:'Invoice'");
  var label = GmailApp.createLabel("Invoices");
  threads.forEach(function(thread) {
    thread.addLabel(label);
    thread.moveToArchive();
  });
}

