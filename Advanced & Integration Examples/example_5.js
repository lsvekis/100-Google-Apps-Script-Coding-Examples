function createTimeTrigger() {
  // Runs the function "scheduledFunction" every day at 8am.
  ScriptApp.newTrigger("scheduledFunction")
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .create();
}

function scheduledFunction() {
  Logger.log("This function runs every day at 8am.");
}

