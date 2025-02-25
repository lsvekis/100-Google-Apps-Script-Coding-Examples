function namedRangeDemo() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  // Assume data is in A1:B5
  var range = sheet.getRange("A1:B5");
  ss.setNamedRange("MyDataRange", range);
  Logger.log("Named range 'MyDataRange' created.");
}

