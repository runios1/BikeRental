import createDomBikeList from "./createDomBikeList.js";
function applyBikeListOnPage(bikes) {
  const bikeList = document.getElementById("BikeList");
  bikeList.innerHTML = ""; // Clear the existing bike list

  createDomBikeList(bikes);
  const bikeListItems = document.querySelectorAll(".bikeListItem");
  bikeListItems.forEach((bikeListItem) => {
    const buttonConatiner = document.createElement("div");
    bikeListItem.appendChild(buttonConatiner);

    const requests = document.createElement("button");
    requests.textContent = "requests";

    const edit = document.createElement("button");
    edit.textContent = "edit";

    const remove = document.createElement("button");
    remove.textContent = "remove";

    buttonConatiner.append(requests, edit, remove);
  });
}

export default applyBikeListOnPage;
