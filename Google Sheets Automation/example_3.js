function readSheetData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();
  Logger.log(data);
}

