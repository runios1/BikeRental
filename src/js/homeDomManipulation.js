document.addEventListener("DOMContentLoaded", function () {
  const uploadButton = document.getElementById("uploadButton");
  const rentButton = document.getElementById("rentButton");
  const myBikesButton = document.getElementById("myBikesButton");
  const sentRequestsButton = document.getElementById("sentRequestsButton");
  const editPasswordButton = document.getElementById("editPasswordButton");
  const passwordForm = document.getElementById("passwordForm");
  const logoutButton = document.getElementById("logoutButton");

  // Check if username is stored in local storage
  const username = localStorage.getItem("username");
  if (!username) {
    // Redirect to the sign-in page
    window.location.href = "/BikeRental/src/html/index.html";
    return; // Stop further execution
  }

  uploadButton.addEventListener("click", function () {
    window.location.href = "upload.html";
  });

  rentButton.addEventListener("click", function () {
    window.location.href = "rent.html";
  });

  myBikesButton.addEventListener("click", function () {
    window.location.href = "mybikes.html";
  });

  sentRequestsButton.addEventListener("click", function () {
    window.location.href = "sent.html";
  });

  editPasswordButton.addEventListener("click", function () {
    // Toggle the visibility of the password form
    passwordForm.classList.toggle("hidden");
    // Hide the big buttons when editing password
    uploadButton.classList.toggle("hidden");
    rentButton.classList.toggle("hidden");
  });

  logoutButton.addEventListener("click", function () {
    // Clear the username from local storage
    localStorage.removeItem("username");
    // Redirect to the sign-in page
    window.location.href = "/BikeRental/src/html/index.html";
  });
});
