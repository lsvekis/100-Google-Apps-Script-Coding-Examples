function insertColumn() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  // Insert a new column before column B (i.e. new column B)
  sheet.insertColumnBefore(2);
}

