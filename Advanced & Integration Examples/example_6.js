function createFormSubmitTrigger() {
  var form = FormApp.openById("FORM_ID_HERE");
  ScriptApp.newTrigger("onFormSubmitHandler")
    .forForm(form)
    .onFormSubmit()
    .create();
}

function onFormSubmitHandler(e) {
  Logger.log("Form submitted with data: " + JSON.stringify(e.values));
}

