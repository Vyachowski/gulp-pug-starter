const menuButton = document.querySelector(".header__toggle");
const pageHeaderMenu = document.querySelector(".header");
const pageBody = document.querySelector("body");

menuButton.addEventListener("click", () => {
  pageHeaderMenu.classList.toggle("header--open");
  pageBody.classList.toggle("menu-opened");
});