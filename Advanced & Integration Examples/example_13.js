function errorHandlingDemo() {
  try {
    // Intentional error: undefined function
    undefinedFunction();
  } catch (error) {
    Logger.log("An error occurred: " + error.message);
  }
}

