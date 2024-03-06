import createDomBikeList from "./createDomBikeList.js";
import { handleEditFormSubmit, handleRemove } from "./myBikesButtonAction.js";
function applyBikeListOnPage(bikes) {
  const bikeList = document.getElementById("BikeList");
  bikeList.innerHTML = ""; // Clear the existing bike list

  createDomBikeList(bikes);
  bikes.forEach((bike) => {
    const buttonConatiner = document.createElement("div");
    bike.domElement.appendChild(buttonConatiner);

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.onclick = () => editClickHandler(bike);

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.onclick = () => handleRemove(bike);

    buttonConatiner.append(edit, remove);
  });
}

function editClickHandler(bike) {
  const dialog = document.getElementById("editPopup");
  const closeButton = document.getElementById("closeButton");

  dialog.showModal();

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  const form = dialog.querySelector("form");
  const description = document.getElementById("description");
  const city = document.getElementById("city");
  const dateStart = document.getElementById("dateStart");
  const dateEnd = document.getElementById("dateEnd");
  const price = document.getElementById("price");

  description.value = bike.description;
  city.value = bike.city;
  dateStart.value = bike.dateStart;
  dateEnd.value = bike.dateEnd;
  price.value = bike.price;

  handleEditFormSubmit(bike, form);
}

export default applyBikeListOnPage;
