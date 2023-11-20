const submitBtn = document.querySelector(".cta__button"),
  password = document.querySelector("#password"),
  passwordConfirm = document.querySelector("#password-confirm"),
  errorDisplayers = document.getElementsByClassName("error"),
  inputFields = document.querySelectorAll("input");

function onValidation(current, messageString, booleanTest) {
  let message = current;
  message.textContent = messageString;
  booleanTest != 0 ? ++count : count;
}

password.addEventListener("keyup", (e) => {
  let message = errorDisplayers[4];
  password.value.length >= 8
    ? onValidation(message, "", 1)
    : onValidation(message, "Password requires minimum 8 charecters", 0);
});

passwordConfirm.addEventListener("keyup", (e) => {
  let message = errorDisplayers[5];
  let input1 = inputFields[4];
  let input2 = inputFields[5];
  if (password.value === e.target.value) {
    input1.classList.remove("invalid");
    input2.classList.remove("invalid");
    onValidation(message, "", 1);
  } else {
    input1.classList.add("invalid");
    input2.classList.add("invalid");
    onValidation(message, "*Password do not match", 0);
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let messagePassword = errorDisplayers[4];
  let input1 = inputFields[4];
  let input2 = inputFields[5];
  if (password.value === passwordConfirm.value) {
    input1.classList.remove("invalid");
    input2.classList.remove("invalid");
    return 1;
  } else {
    input1.classList.add("invalid");
    input2.classList.add("invalid");
    onValidation(messagePassword, "*Password do not match", 0);
  }
});
