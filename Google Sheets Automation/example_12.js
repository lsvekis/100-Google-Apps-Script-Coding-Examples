function sortData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  // Sort by first column (ascending)
  sheet.getDataRange().sort({column: 1, ascending: true});
}

