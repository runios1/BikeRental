class Bike {
  #user;
  constructor(image, description, city, date, price, user) {
    this.image = image;
    this.description = description;
    this.city = city;
    this.date = date;
    this.price = price;
    this.#user = user;
  }
}

export default Bike;
