function showPassword() {
  var passwordInput = document.getElementById("passwrd");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}