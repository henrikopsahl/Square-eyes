const form = document.querySelector(".form");

const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#fullNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const successMessage = document.querySelector("#successMessage");

function validateForm(event) {
  event.preventDefault();

  let isFormOk = true;

  if (fullName.value.trim().length > 0) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
    isFormOk = false;
  }

  if (message.value.trim().length > 9) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    isFormOk = false;
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    isFormOk = false;
  }

  if (isFormOk) {
    successMessage.style.display = "block";
    form.reset();
  }
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}
