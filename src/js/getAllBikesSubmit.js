import applyBikeListOnPage from "./rentDomManipulation.js";

document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.querySelector(".searchBar");
  const errorContainer = document.getElementById("errorContainer");

  // Function to fetch bikes with given search parameters
  const fetchBikes = (searchParams) => {
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
        console.error("Error:", error);
      });
  };

  // Fetch bikes with empty search parameters when page loads
  fetchBikes(new URLSearchParams());

  searchBar.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(searchBar);
    const searchParams = new URLSearchParams(formData);

    // Fetch bikes with search parameters entered by user
    fetchBikes(searchParams);
  });
});
