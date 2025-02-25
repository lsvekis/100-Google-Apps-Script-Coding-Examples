function generateReport() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var data = ss.getSheetByName("Data").getDataRange().getValues();
  
  var doc = DocumentApp.create("Report");
  var body = doc.getBody();
  body.appendParagraph("Report Generated on " + new Date());
  data.forEach(function(row) {
    body.appendParagraph(row.join(" | "));
  });
  
  Logger.log("Report URL: " + doc.getUrl());
}

