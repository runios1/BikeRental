import createRequestsDialog from "./requestsDialogDOM.js";

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

function handleRequests(bike) {
  fetch(`http://localHost:5500/requests/display/bike/${bike.id}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request fetch failed.");
      }
      return response.json();
    })
    .then((requestsObj) => {
      const unrespondedRequests = requestsObj.requests.filter(
        (request) => request.status === null
      );
      createRequestsDialog(unrespondedRequests);
    })
    .catch((error) => {
      console.error("Request fetch Error:", error);
    });
}
export { handleEditFormSubmit, handleRemove, handleRequests };
