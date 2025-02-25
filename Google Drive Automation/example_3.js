function searchFile() {
  var files = DriveApp.getFilesByName("hello.txt");
  if (files.hasNext()) {
    Logger.log("File found: " + files.next().getName());
  } else {
    Logger.log("File not found.");
  }
}

