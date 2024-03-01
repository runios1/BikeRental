document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");
  const errorContainer = document.getElementById("errorContainer");

  // Sign-up event listener
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(signupForm);
    fetch("http://localHost:5500/users/signup", {
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
        // Store the user's authentication status (username) in localStorage
        localStorage.setItem("username", data.username);
        window.location.href = "/BikeRental/src/html/home.html";
      })
      .catch((error) => {
        console.error("Sign-up Error:", error);
        errorContainer.textContent = error.message;
      });
  });

  // Sign-in event listener
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(signinForm);
    fetch("http://localHost:5500/users/signin", {
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
        // Store the user's authentication status (username) in localStorage
        localStorage.setItem("username", data.username);
        console.log(data.username);
        window.location.href = "/BikeRental/src/html/home.html";
      })
      .catch((error) => {
        console.error("Sign-in Error:", error);
        errorContainer.textContent = error.message;
      });
  });
});
