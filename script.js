/* PASSWORD VALIDATION */

const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");

passwordConfirmInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  if (password !== passwordConfirm) {
    passwordConfirmInput.setCustomValidity("Passwords do not match.");
    passwordConfirmInput.classList.add("invalid");
    event.preventDefault();
  } else {
    passwordConfirmInput.setCustomValidity("");
    passwordConfirmInput.classList.remove("invalid");
  }
});

/* PAGE RELOAD ON SUBMIT */

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  location.reload();
});
