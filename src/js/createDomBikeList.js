function createDomBikeList(bikes) {
  console.log(bikes);
  const list = document.getElementById("BikeList");
  bikes.forEach((bike) => {
    const bikeListItem = document.createElement("li");
    bikeListItem.className = "bikeListItem";

    const image = document.createElement("img");
    image.src = "http://127.0.0.1:5500/BikeRentalServer/" + bike.image;
    image.alt = "Bike Image";

    const detailsContainer = document.createElement("div");

    const description = document.createElement("p");
    description.textContent = bike.description;

    const city = document.createElement("p");
    city.textContent = bike.city;

    const dateStart = document.createElement("p");
    dateStart.textContent = bike.dateStart;

    const dateEnd = document.createElement("p");
    dateEnd.textContent = bike.dateEnd;

    const price = document.createElement("p");
    price.textContent = bike.price + "$ per day";

    detailsContainer.append(description, city, dateStart, dateEnd, price);

    bikeListItem.append(image, detailsContainer);

    list.appendChild(bikeListItem);
  });
}

export default createDomBikeList;
