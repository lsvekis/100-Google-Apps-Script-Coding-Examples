function flushDemo() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  sheet.getRange("A1").setValue("Processing...");
  SpreadsheetApp.flush();
  // Continue with operations that require the updated value
  Logger.log("Flushed changes to spreadsheet.");
}

