"use strict";

const slide = document.querySelectorAll(".slide");

slide.forEach((el, i) => {
  el.style.transform = `translateX(${107 * i}%)`;
});

// header
///////////////////////////////////////////////////////////////////////////////////////////////////
const hambergur = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const mainNav = document.querySelector(".main-nav-list");

hambergur.addEventListener("click", function (e) {
  mainNav.classList.add("nav-open");
  hambergur.style.display = "none";
  close.style.display = "inline-block";
});

close.addEventListener("click", function () {
  mainNav.classList.remove("nav-open");
  hambergur.style.display = "inline-block";
  close.style.display = "none";
});
