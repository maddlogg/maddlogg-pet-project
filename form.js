"use strict";

let formButton = document.querySelector(".form-button");
let modal = document.querySelector(".modal-search");
let minusAdult = document.querySelector(".minus-adult");
let plusAdult = document.querySelector(".plus-adult");
let minusKids = document.querySelector(".minus-kids");
let plusKids = document.querySelector(".plus-kids");
let kidsCounter = document.querySelector(".kids-counter");
let adultCounter = document.querySelector(".adult-counter");
let submitButton = document.querySelector(".submit-button");
let dateIn = document.getElementById("intro-date");
let dateOut = document.getElementById("outro-date");
let countAdult = 0;
let countKids = 0;

formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (modal.classList.contains("modal-search-show")) {
    modal.classList.remove("modal-search-show");
    modal.classList.remove("modal-search-error");
    modal.classList.add("modal-search-hide");
  } else {
    modal.classList.add("modal-search-show");
    modal.classList.remove("modal-search-error");
    modal.classList.remove("modal-search-hide");
  }
});

minusAdult.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (countAdult > 0) {
    countAdult--;
    adultCounter.textContent = countAdult;
    if (countAdult < 1) {
      minusAdult.setAttribute("disabled", "disabled");
    }
  } else {
    adultCounter.textContent = 0;
  }
});

plusAdult.addEventListener("click", function (evt) {
  evt.preventDefault();
  minusAdult.removeAttribute("disabled", "disabled");
  if (countAdult >= 0) {
    countAdult++;
    adultCounter.textContent = countAdult;
  } else {
    adultCounter.textContent = 0;
  }
});

minusKids.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (countKids > 0) {
    countKids--;
    kidsCounter.textContent = countKids;
    if (countKids < 1) {
      minusKids.setAttribute("disabled", "disabled");
    }
  } else {
    kidsCounter.textContent = 0;
  }
});

plusKids.addEventListener("click", function (evt) {
  evt.preventDefault();
  minusKids.removeAttribute("disabled", "disabled");
  if (countKids >= 0) {
    countKids++;
    kidsCounter.textContent = countKids;
  } else {
    kidsCounter.textContent = 0;
  }
});

modal.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value) {
    evt.preventDefault();
    modal.classList.remove("modal-search-error");
    void modal.offsetWidth;
    modal.classList.add("modal-search-error");
  } else if (countAdult === 0 && countKids === 0) {
    evt.preventDefault();
    modal.classList.remove("modal-search-error");
    void modal.offsetWidth;
    modal.classList.add("modal-search-error");
  }
});
