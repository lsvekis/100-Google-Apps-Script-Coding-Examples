function updateCell() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  // Update cell B2 with new text
  sheet.getRange("B2").setValue("Updated Value");
}

