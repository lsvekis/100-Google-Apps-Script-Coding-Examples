function formatCells() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  var range = sheet.getRange("A1:A5");
  range.setFontWeight("bold");
  range.setNumberFormat("0.00");
}

