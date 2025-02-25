function applyFormula() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  // Set a formula in cell C1 that sums A1 and B1
  sheet.getRange("C1").setFormula("=A1+B1");
}

