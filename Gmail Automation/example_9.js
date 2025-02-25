function sendHTMLEmail() {
  MailApp.sendEmail({
    to: "recipient@example.com",
    subject: "HTML Email",
    htmlBody: "<h1>Hello!</h1><p>This is an <strong>HTML</strong> email.</p>"
  });
}

