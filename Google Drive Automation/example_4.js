function deleteFile() {
  var files = DriveApp.getFilesByName("hello.txt");
  if (files.hasNext()) {
    var file = files.next();
    file.setTrashed(true);
    Logger.log("File moved to trash: " + file.getName());
  }
}

