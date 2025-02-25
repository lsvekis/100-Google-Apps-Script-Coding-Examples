function criticalSection() {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000); // wait up to 30 seconds
  try {
    // Critical code that must not run concurrently
    Logger.log("Executing critical section.");
  } finally {
    lock.releaseLock();
  }
}

