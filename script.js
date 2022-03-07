"use strict";

const slide = document.querySelectorAll(".slide");

slide.forEach((el, i) => {
  console.log(el);
  el.style.transform = `translateX(${107 * i}%)`;
});
