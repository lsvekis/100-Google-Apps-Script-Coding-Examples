function combineSpreadsheets() {
  // Replace with your source spreadsheet ID
  var sourceId = "SOURCE_SPREADSHEET_ID";
  var sourceSS = SpreadsheetApp.openById(sourceId);
  var sourceData = sourceSS.getSheetByName("Data").getDataRange().getValues();
  
  var targetSS = SpreadsheetApp.getActiveSpreadsheet();
  var targetSheet = targetSS.getSheetByName("Sheet1");
  targetSheet.clear();
  targetSheet.getRange(1, 1, sourceData.length, sourceData[0].length).setValues(sourceData);
}

