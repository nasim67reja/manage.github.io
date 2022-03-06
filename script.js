"use strict";

const slide = document.querySelectorAll(".slide");

slide.forEach((el, i) => {
  console.log(el);
  el.style.transform = `translateX(${110 * (i - 1)}%)`;
});
