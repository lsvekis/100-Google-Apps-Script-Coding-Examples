function deleteRow() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  // Delete the 3rd row of the sheet
  sheet.deleteRow(3);
}

