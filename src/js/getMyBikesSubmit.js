import applyBikeListOnPage from "./myBikesDOMManipulation.js";

document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");

  fetch(`http://localhost:5500/bikes/user/${username}`, {
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
    });
});
