function appendToDoc() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  body.appendParagraph("This text was appended at the end.");
}

