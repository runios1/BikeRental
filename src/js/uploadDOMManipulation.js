import "../css/uploadStyle.css";
import "../css/generalStyle.css";
import Bike from "./bike.js";

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const bike = new Bike(
    formData.get("image"),
    formData.get("description"),
    formData.get("city"),
    formData.get("date"),
    formData.get("price"),
    null //TODO: add user here!
  );

  console.log(bike);
}

const uploadForm = document.querySelector(".formbox");
uploadForm.addEventListener("submit", handleFormSubmit);
