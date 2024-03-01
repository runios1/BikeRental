class Bike {
  #user;
  constructor(image, description, city, dateStart, dateEnd, price, user) {
    this.image = image;
    this.description = description;
    this.city = city;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.price = price;
    this.#user = user;
  }
}

export default Bike;
