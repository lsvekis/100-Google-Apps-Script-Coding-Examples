function addComment() {
  var doc = DocumentApp.getActiveDocument();
  // While direct commenting isn’t available in Apps Script for Docs,
  // you can insert a note as a workaround.
  var body = doc.getBody();
  var para = body.appendParagraph("This text has an inline note.");
  para.setAttributes({ LINK_URL: "https://www.example.com" });
  // In practice, advanced comments may require the Drive API.
}

