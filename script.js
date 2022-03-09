"use strict";

const slide = document.querySelectorAll(".slide");

slide.forEach((el, i) => {
  el.style.transform = `translateX(${107 * i}%)`;
});
