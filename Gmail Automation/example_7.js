function forwardEmail() {
  var threads = GmailApp.search("subject:'Forward me'");
  if (threads.length > 0) {
    var msg = threads[0].getMessages()[0];
    msg.forward("another@example.com");
  }
}

