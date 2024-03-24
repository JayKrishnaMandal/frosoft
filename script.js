document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get("token");

  if (token) {
    // Send token to the server for verification
    sendVerificationToken(token);
  } else {
    window.location.href = "404";
  }
});

function sendVerificationToken(token) {
  const apiEndpoint = "https://frosoft.nagarkokhabar.com/verify-email"; // Replace with your server API endpoint

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Valid-API-Req": "frosoft-api",
    },
    body: JSON.stringify({ token: token }),
  })
    .then((response) => {
      if (response.ok) {
        showModal("Verification successful!", "fa-check-circle", "#27ae60");
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      } else {
        showModal(
          "Verification failed. Please try again.",
          "fa-times-circle",
          "#e74c3c"
        );
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      }
    })
    .catch((error) => {
      //console.error("Error:", error);

      showModal(
        "Verification failed. Please try again.",
        "fa-times-circle",
        "#e74c3c"
      );
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    });
}
function showModal(message, iconClass, iconColor) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
<div class="modal-content">
<span class="close">&times;</span>
<p>${message}</p>
<i class="fas ${iconClass}" style="color: ${iconColor};"></i>
<div class="go-to-home">
  <a href="/">--- Home ---</a>
</div>
</div>
`;
  document.body.appendChild(modal);

  // Close modal on close button click
  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", () => {
    modal.remove();
  });
}
