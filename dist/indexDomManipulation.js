/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/js/indexDomManipulation.js ***!
  \****************************************/
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const signupBox = document.getElementById("signupBox");
  const showSignupLink = document.getElementById("showSignup");
  const showLoginLink = document.getElementById("showLogin");
  const loginBox = document.querySelector(".formbox:not(#signupBox)"); // Select login box excluding signup box

  showSignupLink.addEventListener("click", function (e) {
    e.preventDefault();
    signupBox.classList.remove("hidden");
    loginBox.classList.add("hidden"); // Hide the login box when showing the signup box
  });

  showLoginLink.addEventListener("click", function (e) {
    e.preventDefault();
    signupBox.classList.add("hidden");
    loginBox.classList.remove("hidden"); // Show the login box when hiding the signup box
  });

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Here you can handle the sign up form submission
    const formData = new FormData(signupForm);
    // Example: You can send the data to a server using fetch API
    fetch("your_server_endpoint", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Optionally, you can display a success message or redirect the user
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  });

  // Similarly, you can handle loginForm submission if needed
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhEb21NYW5pcHVsYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWtlcmVudGFsLy4vc3JjL2pzL2luZGV4RG9tTWFuaXB1bGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBzaWdudXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWdudXBGb3JtXCIpO1xyXG4gIGNvbnN0IHNpZ251cEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbnVwQm94XCIpO1xyXG4gIGNvbnN0IHNob3dTaWdudXBMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93U2lnbnVwXCIpO1xyXG4gIGNvbnN0IHNob3dMb2dpbkxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dMb2dpblwiKTtcclxuICBjb25zdCBsb2dpbkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybWJveDpub3QoI3NpZ251cEJveClcIik7IC8vIFNlbGVjdCBsb2dpbiBib3ggZXhjbHVkaW5nIHNpZ251cCBib3hcclxuXHJcbiAgc2hvd1NpZ251cExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzaWdudXBCb3guY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIGxvZ2luQm94LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7IC8vIEhpZGUgdGhlIGxvZ2luIGJveCB3aGVuIHNob3dpbmcgdGhlIHNpZ251cCBib3hcclxuICB9KTtcclxuXHJcbiAgc2hvd0xvZ2luTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNpZ251cEJveC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgbG9naW5Cb3guY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTsgLy8gU2hvdyB0aGUgbG9naW4gYm94IHdoZW4gaGlkaW5nIHRoZSBzaWdudXAgYm94XHJcbiAgfSk7XHJcblxyXG4gIHNpZ251cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gSGVyZSB5b3UgY2FuIGhhbmRsZSB0aGUgc2lnbiB1cCBmb3JtIHN1Ym1pc3Npb25cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHNpZ251cEZvcm0pO1xyXG4gICAgLy8gRXhhbXBsZTogWW91IGNhbiBzZW5kIHRoZSBkYXRhIHRvIGEgc2VydmVyIHVzaW5nIGZldGNoIEFQSVxyXG4gICAgZmV0Y2goXCJ5b3VyX3NlcnZlcl9lbmRwb2ludFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzOlwiLCBkYXRhKTtcclxuICAgICAgICAvLyBPcHRpb25hbGx5LCB5b3UgY2FuIGRpc3BsYXkgYSBzdWNjZXNzIG1lc3NhZ2Ugb3IgcmVkaXJlY3QgdGhlIHVzZXJcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvcnNcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIFNpbWlsYXJseSwgeW91IGNhbiBoYW5kbGUgbG9naW5Gb3JtIHN1Ym1pc3Npb24gaWYgbmVlZGVkXHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=