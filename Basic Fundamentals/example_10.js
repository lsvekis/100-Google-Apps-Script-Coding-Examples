function showAlert() {
  var response = Browser.msgBox("Hello! This is an alert.");
  Logger.log("User responded: " + response);
}

