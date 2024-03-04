import applyBikeListOnPage from "./rentDomManipulation.js";

document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.querySelector(".searchBar");
  const errorContainer = document.getElementById("errorContainer");

  // Search event listener
  searchBar.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const formData = new FormData(searchBar);
    const searchParams = new URLSearchParams(formData); // Create URLSearchParams from FormData

    // Convert searchParams to query string
    const queryString = searchParams.toString();

    fetch(`http://localhost:5500/bikes/rentBikes?${queryString}`, {
      // Use query string in the URL
      method: "GET", // Change method to GET
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch bikes. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Bikes fetched successfully:", data);
        applyBikeListOnPage(data.bikes);
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        // Handle the error here, such as displaying a message to the user
        errorContainer.textContent = error.message;
      });
  });
});
