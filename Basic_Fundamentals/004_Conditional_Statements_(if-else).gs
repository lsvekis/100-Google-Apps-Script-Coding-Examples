function checkNumber(num) {
  if (num > 0) {
    Logger.log("Positive number");
  } else if (num < 0) {
    Logger.log("Negative number");
  } else {
    Logger.log("Zero");
  }
}