import createDomBikeList from "./createDomBikeList.js";
import getBikesByRequest from "./getBikesByRequest.js";
import {
  handleRemove,
  createUserDetailsContainer,
} from "./myRequestsButtonAction.js";

async function applyRequestListOnPage(requests) {
  const requestList = document.getElementById("BikeList");
  requestList.innerHTML = ""; // Clear the existing bike list

  const bikeResponses = await getBikesByRequest(requests.requests);
  const bikes = bikeResponses.map((response) => response.bike);

  createDomBikeList(bikes);
  bikes.map((bike, index) => {
    // Show current status of request
    const status = requests.requests[index].status;
    const statusDOM = document.createElement("div");

    if (status !== null) {
      statusDOM.textContent = status.charAt(0).toUpperCase() + status.slice(1);
    } else {
      statusDOM.textContent = "Pending";
    }

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Request";

    removeButton.addEventListener("click", () => {
      handleRemove(requests.requests[index].id).then((isRemoved) => {
        if (isRemoved) bike.domElement.remove();
      });
    });

    statusDOM.append(removeButton);

    if (status == "accepted") {
      const contactButton = document.createElement("button");
      contactButton.textContent = "Show Contact Info";

      let userDetailsContainer;
      createUserDetailsContainer(bike)
        .then((container) => {
          userDetailsContainer = container;
          userDetailsContainer.style.display = "none"; // Initially hide the user details
          statusDOM.append(userDetailsContainer);
        })
        .catch((error) => console.error("Error:", error));

      contactButton.addEventListener("click", () => {
        if (userDetailsContainer.style.display === "none") {
          userDetailsContainer.style.display = "block";
          contactButton.textContent = "Hide Contact Info";
        } else {
          userDetailsContainer.style.display = "none";
          contactButton.textContent = "Show Contact Info";
        }
      });

      statusDOM.append(contactButton);
    }

    bike.domElement.appendChild(statusDOM);
    return bike;
  });
}

export default applyRequestListOnPage;
