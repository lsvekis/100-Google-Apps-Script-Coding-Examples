function insertImage() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var imageUrl = "https://www.example.com/sample-image.jpg"; // Replace with a valid image URL
  var response = UrlFetchApp.fetch(imageUrl);
  var blob = response.getBlob();
  body.appendImage(blob);
}

