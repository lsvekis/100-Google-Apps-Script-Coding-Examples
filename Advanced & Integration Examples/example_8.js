function regexDemo() {
  var text = "Order ID: 12345, Date: 2025-02-20";
  var regex = /Order ID:\s*(\d+),\s*Date:\s*([\d-]+)/;
  var matches = text.match(regex);
  if (matches) {
    Logger.log("Order ID: " + matches[1] + ", Date: " + matches[2]);
  }
}

