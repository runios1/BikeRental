async function requestBike(bike) {
  const formData = new FormData();
  formData.append("bikeId", bike.id);
  formData.append("username", localStorage.getItem("username"));

  fetch("http://localHost:5500/requests/createRequest", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default requestBike;
