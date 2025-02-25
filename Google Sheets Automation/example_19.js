function onEdit(e) {
  var range = e.range;
  var newValue = e.value;
  Logger.log("Cell " + range.getA1Notation() + " changed to " + newValue);
}

