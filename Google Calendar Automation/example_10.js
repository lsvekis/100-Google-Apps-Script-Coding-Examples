function listFiles() {
  var files = DriveApp.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    Logger.log(file.getName());
  }
}

