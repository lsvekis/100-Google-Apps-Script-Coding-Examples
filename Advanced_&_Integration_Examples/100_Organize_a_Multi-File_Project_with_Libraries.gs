function runLibraryFunction() {
  // Assume MyLibrary is added as a library with the identifier "MyLib"
  var result = MyLib.libraryFunction("Test Input");
  Logger.log("Library returned: " + result);
}

// Library Code (Separate Project)
function libraryFunction(input) {
  return "Processed: " + input;
}