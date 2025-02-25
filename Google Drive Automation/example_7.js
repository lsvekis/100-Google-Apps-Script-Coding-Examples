function shareFile() {
  var file = DriveApp.getFilesByName("hello.txt").next();
  file.addViewer("user@example.com");
  Logger.log("File shared with user@example.com");
}

