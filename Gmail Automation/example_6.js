function autoReply() {
  var threads = GmailApp.search('is:unread subject:"Support"');
  for (var i = 0; i < threads.length; i++) {
    var message = threads[i].getMessages()[0];
    // Only reply if not already replied
    if (!message.isStarred()) {
      message.reply("Thank you for contacting support. We will get back to you soon.");
      message.star(); // Mark as processed
    }
  }
}

