function createDomBikeList(bikes) {
  const list = document.getElementById("BikeList");
  list.innerHTML = ""; // Clear existing bike list

  bikes.forEach((bike) => {
    const bikeListItem = document.createElement("li");
    bikeListItem.className = "bikeListItem";

    const image = document.createElement("img");
    image.src = "http://127.0.0.1:5500/" + bike.image;
    image.alt = "Bike Image";

    const detailsContainer = document.createElement("div");
    detailsContainer.className = "detailsContainer"; // Add class for styling

    const description = document.createElement("p");
    description.textContent = "Description: " + bike.description;

    const city = document.createElement("p");
    city.textContent = "City: " + bike.city;

    const dateStart = document.createElement("p");
    dateStart.textContent = "Start Date: " + bike.dateStart;

    const dateEnd = document.createElement("p");
    dateEnd.textContent = "End Date: " + bike.dateEnd;

    const price = document.createElement("p");
    price.textContent = "Price: " + bike.price + " dollars per day";

    detailsContainer.append(description, city, dateStart, dateEnd, price);

    bikeListItem.append(image, detailsContainer);

    list.appendChild(bikeListItem);

    bike.domElement = bikeListItem;
  });
}

export default createDomBikeList;
