function addContact(name, email, phone) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Contacts");
  sheet.appendRow([new Date(), name, email, phone]);
}

function testAddContact() {
  addContact("Alice Smith", "alice@example.com", "123-456-7890");
}

