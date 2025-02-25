function createFolder() {
  var folder = DriveApp.createFolder("New Folder");
  Logger.log("Folder created: " + folder.getName());
}

