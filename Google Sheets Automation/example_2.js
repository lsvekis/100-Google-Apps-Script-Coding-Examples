function appendRow() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  // Append a row with sample data
  sheet.appendRow(["Name", "Email", "Date"]);
}

