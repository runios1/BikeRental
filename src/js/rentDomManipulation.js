import createDomBikeList from "./createDomBikeList.js";

function rentDomManipulation(bikes) {
  const bikeList = document.getElementById("BikeList");
  bikeList.innerHTML = ""; // Clear the existing bike list

  createDomBikeList(bikes); // Create DOM elements for each bike

  // Select all bike list items
  const bikeListItems = document.querySelectorAll(".bikeListItem");

  // Iterate over each bike list item
  bikeListItems.forEach((bikeListItem) => {
    // Create a container for buttons
    const buttonContainer = document.createElement("div");

    // Create button for renting
    const rentButton = document.createElement("button");
    rentButton.textContent = "Rent";

    // Append the rent button to the button container
    buttonContainer.appendChild(rentButton);

    // Append the button container to the bike list item
    bikeListItem.appendChild(buttonContainer);
  });
}

export default rentDomManipulation;
