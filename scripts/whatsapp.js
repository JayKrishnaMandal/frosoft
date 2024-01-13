function openWhatsApp() {
  window.open("https://wa.me/+9779702940654", "_blank");
}
function makePhoneCall() {
  window.location.href = "tel:+9779702940654"; // Replace with your phone number
}
var whatsappButton = document.querySelector(".whatsapp-icon");
var phoneButton = document.querySelector(".whatsapp-icon.phone");
var footer = document.querySelector("footer");

if (whatsappButton && phoneButton && footer) {
  window.addEventListener("scroll", function () {
    var rectWhatsApp = whatsappButton.getBoundingClientRect();
    var rectPhone = phoneButton.getBoundingClientRect();
    var rectFooter = footer.getBoundingClientRect();

    if (
      (rectWhatsApp.bottom < rectFooter.top ||
        rectWhatsApp.top > rectFooter.bottom) &&
      (rectPhone.bottom < rectFooter.top || rectPhone.top > rectFooter.bottom)
    ) {
      // Both buttons are outside the footer
      whatsappButton.style.opacity = 1;
      phoneButton.style.opacity = 1;
    } else {
      // At least one button is in or near the footer
      whatsappButton.style.opacity = 0;
      phoneButton.style.opacity = 0;
    }
  });
}
