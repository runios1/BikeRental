function createDomBikeList(bikes) {
  const list = document.getElementById("bikeList");
  bikes.array.forEach((bike) => {
    const bikeListItem = document.createElement("li");

    const image = document.createElement("img");
    image.src = bike.image;
    image.alt = "Bike Image";

    const description = document.createElement("p");
    description.textContent = bike.description;

    const city = document.createElement("p");
    city.textContent = bike.city;

    const dateStart = document.createElement("p");
    dateStart.textContent = bike.dateStart;

    const dateEnd = document.createElement("p");
    dateEnd.textContent = bike.dateEnd;

    const price = document.createElement("p");
    price.textContent = bike.price;

    bikeListItem.append(image, description, city, dateStart, dateEnd, price);

    list.appendChild(bikeListItem);
  });
}

export default createDomBikeList;
