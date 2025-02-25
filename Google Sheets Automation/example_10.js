function applyFilter() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  // Create a filter on the entire data range
  sheet.getDataRange().createFilter();
}

