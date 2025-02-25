function parseJSONDemo() {
  var response = UrlFetchApp.fetch("https://api.chucknorris.io/jokes/random");
  var data = JSON.parse(response.getContentText());
  Logger.log("ID: " + data.id + " - Joke: " + data.value);
}

