const menuToggler = document.querySelector(".menu-toggler");
const sideBar = document.querySelector(".side-bar");
const about = document.querySelector(".about");

menuToggler.addEventListener("click", function () {
  sideBar.classList.toggle("active");
});

about.addEventListener("click", function () {
  sideBar.classList.remove("active");
});
