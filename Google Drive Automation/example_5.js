function moveFile() {
  var file = DriveApp.getFilesByName("hello.txt").next();
  var folder = DriveApp.createFolder("Destination Folder");
  folder.addFile(file);
  // Optionally remove from original folder
  DriveApp.getRootFolder().removeFile(file);
  Logger.log("File moved to 'Destination Folder'.");
}

