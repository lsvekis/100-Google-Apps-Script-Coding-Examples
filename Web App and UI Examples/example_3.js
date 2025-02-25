function showSidebar() {
  var html = HtmlService.createHtmlOutput("<p>This is a custom sidebar.</p>")
      .setTitle("My Sidebar");
  SpreadsheetApp.getUi().showSidebar(html);
}

