function conditionalFormatting() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  var range = sheet.getRange("A1:A10");
  var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThan(50)
    .setBackground("#FFCCCC")
    .setRanges([range])
    .build();
  var rules = sheet.getConditionalFormatRules();
  rules.push(rule);
  sheet.setConditionalFormatRules(rules);
}

