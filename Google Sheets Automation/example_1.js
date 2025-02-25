function createSpreadsheet() {
  var ss = SpreadsheetApp.create("My New Spreadsheet");
  Logger.log("Created Spreadsheet with ID: " + ss.getId());
}

