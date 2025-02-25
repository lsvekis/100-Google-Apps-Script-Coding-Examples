function insertTable() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var table = body.appendTable([
    ["Name", "Email"],
    ["Alice", "alice@example.com"],
    ["Bob", "bob@example.com"]
  ]);
}

