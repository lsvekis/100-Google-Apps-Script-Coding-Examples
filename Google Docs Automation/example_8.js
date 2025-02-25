function exportDocAsPDF() {
  var doc = DocumentApp.getActiveDocument();
  var pdfBlob = doc.getAs("application/pdf");
  // Save the PDF to Drive (in the root folder)
  DriveApp.createFile(pdfBlob).setName("ExportedDocument.pdf");
  Logger.log("Document exported as PDF.");
}

