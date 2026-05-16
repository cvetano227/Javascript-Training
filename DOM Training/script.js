"use strict";

const icon = document.querySelector(".icon");
const links = document.querySelector("#headerLinks");

icon.addEventListener("click", function () {
  links.classList.toggle("active");
});
