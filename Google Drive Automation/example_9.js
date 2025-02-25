function renameFile() {
  var file = DriveApp.getFilesByName("hello.txt").next();
  file.setName("renamed_hello.txt");
  Logger.log("File renamed to " + file.getName());
}

