function addTableOfContents() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  // Insert the Table of Contents at the beginning
  body.insertTableOfContents(0);
}

