function toggleMenu() {
  var menu = document.querySelector(".menu");
  menu.classList.toggle("active");

  var hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("cross");

  setTimeout(function () {
    menu.classList.toggle("show");
  }, 300);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    toggleMenu();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.getElementById("contactButton").addEventListener("click", function () {
  // Replace 'https://example.com' with your desired URL
  window.location.href = "contactUs.html";
});
