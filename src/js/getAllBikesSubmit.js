import applyBikeListOnPage from "./rentDomManipulation.js";

document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.querySelector(".searchBar");
  const errorContainer = document.getElementById("errorContainer");

  searchBar.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(searchBar);
    const searchParams = new URLSearchParams(formData);

    const queryString = searchParams.toString();

    fetch(`http://localhost:5500/bikes/rentBikes?${queryString}`, {
      method: "GET",
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
        errorContainer.textContent = error.message;
      });
  });
});
