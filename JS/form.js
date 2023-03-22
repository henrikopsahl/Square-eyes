const form = document.querySelector("form");
const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const reEnterPassword = document.querySelector("#reEnterPassword");
const reEnterPasswordError = document.querySelector("#reEnterPasswordError");

function validateForm(event) {
  event.preventDefault();
  let isFormOk = true;

  if (fullName.value.trim().length > 0) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
    isFormOk = false;
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    isFormOk = false;
  }

  if (validatePassword(password.value)) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
    isFormOk = false;
  }

  if (password.value === reEnterPassword.value) {
    reEnterPasswordError.style.display = "none";
  } else {
    reEnterPasswordError.style.display = "block";
    isFormOk = false;
  }

  if (isFormOk) {
    getToSuccessPage();
  }
}

function getToSuccessPage() {
  window.location.href = "success.html";
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}

function validatePassword(password) {
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;

  if (
    password.length >= 8 &&
    lowercaseRegex.test(password) &&
    uppercaseRegex.test(password) &&
    numberRegex.test(password)
  ) {
    return true;
  } else {
    return false;
  }
}








