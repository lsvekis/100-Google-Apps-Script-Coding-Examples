function createChart() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  var chart = sheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(sheet.getRange("A1:B5"))
    .setPosition(7, 1, 0, 0)
    .build();
  sheet.insertChart(chart);
}

