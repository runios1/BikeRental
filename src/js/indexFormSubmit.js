// indexFormSubmit.js

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");
  const errorContainer = document.getElementById("errorContainer");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Sign-up form submitted"); // Log message
    const formData = new FormData(signupForm);
    fetch("/users/signup", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Sign-up failed. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Sign-up Success:", data);
        window.location.href = "/src/html/home.html";
      })
      .catch((error) => {
        console.error("Sign-up Error:", error);
        errorContainer.textContent = error.message;
      });
  });

  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(signinForm);
    fetch("/users/signup", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Sign-in failed. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Sign-in Success:", data);
        window.location.href = "/src/html/home.html";
      })
      .catch((error) => {
        console.error("Sign-in Error:", error);
        errorContainer.textContent = error.message;
      });
  });
});
