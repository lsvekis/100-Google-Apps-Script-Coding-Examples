function createGoogleDoc() {
  var doc = DocumentApp.create("My New Document");
  Logger.log("Created doc with URL: " + doc.getUrl());
}

