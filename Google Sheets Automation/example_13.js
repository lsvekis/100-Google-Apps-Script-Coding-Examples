function importCSV() {
  // Sample CSV data as a string
  var csvData = "Name,Email,Score\nAlice,alice@example.com,90\nBob,bob@example.com,85";
  var data = Utilities.parseCsv(csvData);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  sheet.clear();
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
}

