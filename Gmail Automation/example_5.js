function sendEmailWithAttachment() {
  // Assume you have a file in Drive with the given ID
  var file = DriveApp.getFileById("FILE_ID_HERE");
  MailApp.sendEmail({
    to: "recipient@example.com",
    subject: "Email with Attachment",
    body: "Please see the attached file.",
    attachments: [file.getAs(MimeType.PDF)]
  });
}

