function multiSheetDemo() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName("Sheet1");
  var sheet2 = ss.getSheetByName("Sheet2");
  var data1 = sheet1.getRange("A1:A5").getValues();
  var data2 = sheet2.getRange("A1:A5").getValues();
  Logger.log("Sheet1 data: " + JSON.stringify(data1));
  Logger.log("Sheet2 data: " + JSON.stringify(data2));
}

