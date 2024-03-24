import applyRequestListOnPage from "./myRequestsDOMManipulation.js";

document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");

  fetch(`http://localhost:5500/requests/display/user/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch requests. Please try again.");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Requests fetched successfully:", data);
      applyRequestListOnPage(data);
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
    });
});
