function markEmailsAsRead() {
  var threads = GmailApp.search("is:unread");
  for (var i = 0; i < threads.length; i++) {
    threads[i].markRead();
  }
}

