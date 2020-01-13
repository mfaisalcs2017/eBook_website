function validateName() {

  var name = document.getElementById('fname').value;

  if (name.length == 0) {

    producePrompt('Name is required', 'name-error', 'red')
    return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('First and last name, please.', 'name-error', 'red');
    return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;

}

function validateEmail() {

  var email = document.getElementById('em').value;

  if (email.length == 0) {

    producePrompt('Email Invalid', 'email-error', 'red');
    return false;

  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    producePrompt('Email Invalid', 'email-error', 'red');
    return false;

  }

  producePrompt('Valid', 'email-error', 'green');
  return true;

}

function validateCName() {
  var cname = document.getElementById('cname').value;

  if (cname.length == 0) {

    producePrompt('Invalid Company Name', 'company-error', 'red');
    return false;

  }
  producePrompt('Valid', 'company-error', 'green');
  return true;
}

function validateCondition() {
  var checkbox = document.getElementById('checkbox');
  if (checkbox.checked == false) {
    producePrompt('Please agree to the terms and conditions', 'condition-error', 'red');
    return false;
  } else {
    producePrompt('', 'condition-error', 'green');
    return true;
  }
}

function validateForm() {
  if (!validateName() || !validateEmail() || !validateCName() || !validateCondition()) {
    jsShow('submit-error');
    producePrompt('Please fix errors to submit.', 'submit-error', 'red');
    setTimeout(function () {
      jsHide('submit-error');
    }, 2000);
    return false
  } else {
    jsHide('name-error');
    jsHide('email-error');
    jsHide('company-error');
    var elements = document.querySelector('form').elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
      var item = elements.item(i);
      obj[item.name] = item.value;
    }
    console.log(JSON.stringify(obj))
    document.querySelector('form').reset()
    var recieved = document.getElementById('recieved');
    producePrompt('Form Submitted Successfully..!!', 'recieved', 'yellow');
    setTimeout(function () {
      jsHide('recieved');
    }, 2000);
  }
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}