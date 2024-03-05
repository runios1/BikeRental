function handleEditFormSubmit(bike, form) {
  const id = bike.id;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    fetch(`http://localHost:5500/bikes/edit/${id}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Bike edit failed.");
        }
        return false;
      })
      .then((data) => {
        console.log("Bike edit Success:", data);
        return true;
      })
      .catch((error) => {
        console.error("Bike edit Error:", error);
        return false;
      });
  });
}

function handleRemove(bike) {
  fetch(`http://localHost:5500/bikes/remove/${bike.id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Bike removal failed.");
      }
      return false;
    })
    .then((data) => {
      console.log("Bike removal Success:", data);
      return true;
    })
    .catch((error) => {
      console.error("Bike removal Error:", error);
      return false;
    });
}

export { handleEditFormSubmit, handleRemove };
