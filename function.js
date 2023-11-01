"use strict";
console.log("JS Started");

const password = document.querySelector('#password');
const confirmedPassword = document.querySelector('#confirm_pass');
const form = document.querySelector('.form-wrapper');

const errorDisplay = document.createElement("div");
errorDisplay.textContent = "Passwords not matching!";
errorDisplay.style.color = "red";
form.appendChild(errorDisplay);
errorDisplay.style.display = "none";

confirmedPassword.addEventListener('input', () => {
  console.log(password.value);
  console.log(confirmedPassword.value);
  if (password.value != confirmedPassword.value) {
    errorDisplay.style.display = "block";
  } else {
    errorDisplay.style.display = "none";
  }
});