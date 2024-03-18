document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get("token");

  if (token) {
    // Send token to the server for verification
    sendVerificationToken(token);
  } else {
    showMessage("Token not found in URL.");
  }
});

function sendVerificationToken(token) {
  const apiEndpoint = "http://frosoft.nagarkokhabar.com"; // Replace with your server API endpoint

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: token }),
  })
    .then((response) => {
      if (response.ok) {
        showMessage("Verification successful!");
      } else {
        showMessage("Verification failed. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      showMessage("An error occurred. Please try again later.");
    });
}

function showMessage(message) {
  document.getElementById("message").textContent = message;
  // Show modal
  const modal = document.getElementById("myModal");
  const modalMessage = document.getElementById("modal-message");
  modalMessage.textContent = message;
  modal.style.display = "block";

  // Close modal when the user clicks anywhere outside of it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Close modal when the user clicks the close button
  const closeButton = document.getElementsByClassName("close")[0];
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}
