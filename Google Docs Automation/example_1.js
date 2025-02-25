function writeToDoc() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  body.setText("Hello, this is a sample text in the document.");
}

