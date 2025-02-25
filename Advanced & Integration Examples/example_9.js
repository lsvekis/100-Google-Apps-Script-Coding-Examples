function generatePDFReport() {
  var doc = DocumentApp.create("PDF Report");
  doc.getBody().appendParagraph("This is your PDF report.");
  var pdfBlob = doc.getAs("application/pdf");
  var file = DriveApp.createFile(pdfBlob).setName("Report.pdf");
  Logger.log("PDF report created: " + file.getUrl());
}

