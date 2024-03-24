import createDomBikeList from "./createDomBikeList.js";
import requestBike from "./requestBike.js";

function rentDomManipulation(bikes) {
  const bikeList = document.getElementById("BikeList");
  bikeList.innerHTML = ""; // Clear the existing bike list

  createDomBikeList(bikes); // Create DOM elements for each bike

  bikes.forEach((bike) => {
    const buttonContainer = document.createElement("div");
    const rentButton = document.createElement("button");

    rentButton.textContent = "Send Request";

    buttonContainer.appendChild(rentButton);
    bike.domElement.appendChild(buttonContainer);

    rentButton.addEventListener("click", () => {
      requestBike(bike);
    });
  });
}

export default rentDomManipulation;
