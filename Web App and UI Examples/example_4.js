function showDialog() {
  var html = HtmlService.createHtmlOutput("<p>This is a custom dialog.</p>")
      .setWidth(300)
      .setHeight(150);
  DocumentApp.getUi().showModalDialog(html, "Dialog Title");
}

