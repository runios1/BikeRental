import createDomBikeList from "./createDomBikeList.js";

function createUserDetailsContainer(bike) {
  const userDetailsContainer = document.createElement("div");
  userDetailsContainer.style.display = "none"; // Initially hide user details

  const username = document.createElement("p");
  username.textContent = `Username: ${bike.user.username}`;

  const email = document.createElement("p");
  email.textContent = `Email: ${bike.user.email}`;

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = `Phone Number: ${bike.user.phoneNumber}`;

  userDetailsContainer.appendChild(username);
  userDetailsContainer.appendChild(email);
  userDetailsContainer.appendChild(phoneNumber);

  return userDetailsContainer;
}
function rentDomManipulation(bikes) {
  const bikeList = document.getElementById("BikeList");
  bikeList.innerHTML = ""; // Clear the existing bike list

  createDomBikeList(bikes); // Create DOM elements for each bike

  bikes.forEach((bike) => {
    const buttonContainer = document.createElement("div");
    const rentButton = document.createElement("button");

    rentButton.textContent = "show contact";

    const userDetailsContainer = createUserDetailsContainer(bike);

    buttonContainer.appendChild(rentButton);
    buttonContainer.appendChild(userDetailsContainer);
    bike.domElement.appendChild(buttonContainer);

    rentButton.addEventListener("click", () => {
      // Toggle visibility of user details and change button text accordingly
      if (userDetailsContainer.style.display === "none") {
        userDetailsContainer.style.display = "block";
        rentButton.textContent = "hide contact";
      } else {
        userDetailsContainer.style.display = "none";
        rentButton.textContent = "show contact";
      }
    });
  });
}

export default rentDomManipulation;
