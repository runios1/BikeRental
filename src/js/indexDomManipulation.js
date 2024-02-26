document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const signupBox = document.getElementById("signupBox");
  const showSignupLink = document.getElementById("showSignup");
  const showLoginLink = document.getElementById("showLogin");
  const loginBox = document.querySelector(".formbox:not(#signupBox)"); // Select login box excluding signup box

  showSignupLink.addEventListener("click", function (e) {
    e.preventDefault();
    signupBox.classList.remove("hidden");
    loginBox.classList.add("hidden"); // Hide the login box when showing the signup box
  });

  showLoginLink.addEventListener("click", function (e) {
    e.preventDefault();
    signupBox.classList.add("hidden");
    loginBox.classList.remove("hidden"); // Show the login box when hiding the signup box
  });

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Here you can handle the sign up form submission
    const formData = new FormData(signupForm);
    // Example: You can send the data to a server using fetch API
    fetch("your_server_endpoint", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Optionally, you can display a success message or redirect the user
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  });

  // Similarly, you can handle loginForm submission if needed
});
