function formatText() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var para = body.appendParagraph("This text will be bold and blue.");
  para.setBold(true);
  para.setForegroundColor("#0000FF");
}

