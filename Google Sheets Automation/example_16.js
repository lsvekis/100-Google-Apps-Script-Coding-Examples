function dataValidationDemo() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  var range = sheet.getRange("B2:B10");
  var rule = SpreadsheetApp.newDataValidation()
    .requireNumberBetween(1, 100)
    .build();
  range.setDataValidation(rule);
}

