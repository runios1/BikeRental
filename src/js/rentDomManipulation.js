import createDomBikeList from "./createDomBikeList.js";

function rentDomManipulation(bikes) {
  const bikeList = document.getElementById("BikeList");
  bikeList.innerHTML = ""; // Clear the existing bike list

  createDomBikeList(bikes); // Create DOM elements for each bike

  bikes.forEach((bike) => {
    const buttonContainer = document.createElement("div");
    const rentButton = document.createElement("button");

    rentButton.textContent = "Rent";

    buttonContainer.appendChild(rentButton);
    bike.domElement.appendChild(buttonContainer);
  });
}

export default rentDomManipulation;
