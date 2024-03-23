document.addEventListener("DOMContentLoaded", function () {
  const uploadForm = document.querySelector("form");
  const errorContainer = document.getElementById("errorContainer");

  uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(uploadForm);
    formData.append("username", localStorage.getItem("username"));
    fetch("http://localHost:5500/bikes/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Upload failed. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Upload Success:", data);
        window.location.href = "/html/myBikes.html";
      })
      .catch((error) => {
        console.error("Upload Error:", error);
        errorContainer.textContent = error.message;
      });
  });
});
