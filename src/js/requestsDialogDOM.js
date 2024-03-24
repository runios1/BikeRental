import { handleAccept, handleReject } from "./requestDialogButtonAction.js";
function createRequestsDialog(requests) {
  const dialog = document.createElement("dialog");
  document.body.appendChild(dialog);

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.id = "closeButton";
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.appendChild(closeButton);

  const requestsContainer = document.createElement("div");
  requestsContainer.id = "requestsContainer";

  requests.forEach((request) => {
    const requestElement = document.createElement("p");
    requestElement.textContent = `Request from ${request.requester}`;

    const acceptButton = document.createElement("button");
    acceptButton.textContent = "Accept";
    acceptButton.addEventListener("click", () => {
      handleAccept(request).then((isAccepted) => {
        if (isAccepted) {
          requestsContainer.remove();
        }
      });
    });

    const rejectButton = document.createElement("button");
    rejectButton.textContent = "Reject";
    rejectButton.addEventListener("click", () => {
      handleReject(request).then((isAccepted) => {
        if (isAccepted) {
          requestsContainer.remove();
        }
      });
    });

    requestsContainer.append(requestElement, acceptButton, rejectButton);
  });

  if (requests.length === 0) {
    const noRequestsElement = document.createElement("p");
    noRequestsElement.textContent = "No requests available.";
    requestsContainer.appendChild(noRequestsElement);
  }

  dialog.appendChild(requestsContainer);

  dialog.showModal();
}

export default createRequestsDialog;
