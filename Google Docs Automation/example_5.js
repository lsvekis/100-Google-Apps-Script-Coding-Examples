function addHeaderFooter() {
  var doc = DocumentApp.getActiveDocument();
  var header = doc.addHeader();
  header.appendParagraph("This is the header.");
  var footer = doc.addFooter();
  footer.appendParagraph("This is the footer.");
}

