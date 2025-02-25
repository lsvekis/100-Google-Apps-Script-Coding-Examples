function callExternalAPI() {
  var response = UrlFetchApp.fetch("https://api.chucknorris.io/jokes/random");
  var json = JSON.parse(response.getContentText());
  Logger.log("Joke: " + json.value);
}

