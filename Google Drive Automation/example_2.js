function uploadFile() {
  var content = "Hello, Drive!";
  var blob = Utilities.newBlob(content, "text/plain", "hello.txt");
  var file = DriveApp.createFile(blob);
  Logger.log("File uploaded: " + file.getName());
}

