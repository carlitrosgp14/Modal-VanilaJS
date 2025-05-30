"use strict";

const btnOpenModal = document.querySelector(".btn--open-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.add("visible");
  overlay.classList.add("visible");
};

const closeModal = function () {
  modal.classList.remove("visible");
  overlay.classList.remove("visible");
};

// Functionality to open the Modal with the button
btnOpenModal.addEventListener("click", openModal);

// Functionality to close the Modal with the button
btnCloseModal.addEventListener("click", closeModal);

//Functionality to close the Modal with by clicking the overlay

overlay.addEventListener("click", closeModal);

// Function to close the modal when pressing 'Esc' Key

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && modal.classList.contains("visible")) {
    closeModal();
  }
});
