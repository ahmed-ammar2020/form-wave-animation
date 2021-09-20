"use strict";

const inputs = document.querySelectorAll("input");
let spans;

inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    if (input.classList.contains("email-input")) {
      spans = document.querySelectorAll("label.email-label span");
    } else {
      spans = document.querySelectorAll("label.pass-label span");
    }
    spans.forEach((span) => {
      span.classList.add("focus");
    });
  });
});

inputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (input.classList.contains("email-input")) {
      spans = document.querySelectorAll("label.email-label span");
    } else {
      spans = document.querySelectorAll("label.pass-label span");
    }
    spans.forEach((span) => {
      span.classList.remove("focus");
    });
  });
});
