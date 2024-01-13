function toggleMenu() {
  var menu = document.querySelector(".menu");
  menu.classList.toggle("active");

  var hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("cross");

  setTimeout(function () {
    menu.classList.toggle("show");
  }, 300);
}
