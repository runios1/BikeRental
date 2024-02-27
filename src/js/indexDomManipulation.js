// indexDomManipulation.js

document.addEventListener("DOMContentLoaded", function () {
  const signupBox = document.getElementById("signupBox");
  const showSignupLink = document.getElementById("showSignup");
  const showLoginLink = document.getElementById("showLogin");
  const loginBox = document.querySelector(".formbox:not(#signupBox)");
  const errorContainer = document.getElementById("errorContainer");

  showSignupLink.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Sign-up form submitted"); // Log message
    signupBox.classList.remove("hidden");
    loginBox.classList.add("hidden");
    clearError(); // Clear any error message when switching between forms
  });

  showLoginLink.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Sign-up form submitted"); // Log message
    signupBox.classList.add("hidden");
    loginBox.classList.remove("hidden");
    clearError(); // Clear any error message when switching between forms
  });

  function clearError() {
    errorContainer.textContent = ""; // Clear error message
  }
});
