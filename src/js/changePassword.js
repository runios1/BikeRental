document.addEventListener("DOMContentLoaded", function () {
  const changePasswordForm = document.getElementById("passwordForm");
  const errorContainer = document.getElementById("errorContainer");

  // Change password event listener
  changePasswordForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(changePasswordForm);
    formData.append("username", localStorage.getItem("username"));
    fetch("http://localHost:5500/users/changePassword", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Change password failed.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Change password Success:", data);

        window.location.href = "/BikeRental/src/html/home.html";
      })
      .catch((error) => {
        console.error("Change password Error:", error);
        errorContainer.textContent = error.message;
      });
  });
});
