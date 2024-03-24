async function handleRemove(requestId) {
  return fetch(`http://localhost:5500/requests/${requestId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request removal failed.");
      }
      return response.ok;
    })
    .catch((error) => {
      console.error("Request removal Error:", error);
      return false;
    });
}

async function createUserDetailsContainer(bike) {
  return fetch(`http://localhost:5500/users/${bike.uploader}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request removal failed.");
      }
      return response.json().then((data) => {
        const userDetailsContainer = document.createElement("div");
        userDetailsContainer.style.display = "none"; // Initially hide user details

        const username = document.createElement("p");
        username.textContent = `Username: ${data.username}`;

        const email = document.createElement("p");
        email.textContent = `Email: ${data.email}`;

        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = `Phone Number: ${data.phoneNumber}`;

        userDetailsContainer.appendChild(username);
        userDetailsContainer.appendChild(email);
        userDetailsContainer.appendChild(phoneNumber);

        return userDetailsContainer;
      });
    })
    .catch((error) => {
      console.error("Request removal Error:", error);
      return;
    });
}

export { handleRemove, createUserDetailsContainer };
