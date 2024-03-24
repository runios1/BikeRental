async function handleAccept(request) {
  return fetch(`http://localhost:5500/requests/accept/${request.id}`, {
    method: "PATCH",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request accept failed.");
      }
      return response.ok;
    })
    .catch((error) => {
      console.error("Request accept Error:", error);
      return false;
    });
}

async function handleReject(request) {
  return fetch(`http://localhost:5500/requests/reject/${request.id}`, {
    method: "PATCH",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request reject failed.");
      }
      return response.ok;
    })
    .catch((error) => {
      console.error("Request reject Error:", error);
      return false;
    });
}

export { handleAccept, handleReject };
