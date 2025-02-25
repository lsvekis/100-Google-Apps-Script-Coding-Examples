function setFilePermissions() {
  var file = DriveApp.getFilesByName("hello.txt").next();
  // Make the file publicly viewable
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  Logger.log("File permissions updated.");
}

