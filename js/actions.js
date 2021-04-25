"use strict";

const mainBackground = document.getElementById("mainBackground");
const footer = document.querySelector(".footer");
const canvas = document.getElementById("particleCanvas");
const banner = document.querySelector(".banner");
const customerReferences = document.getElementById("customerReferences");
const awardReferences = document.getElementById("awardReferences");
const backgroundHolder = document.querySelector(".mainBackgroundHolder")

const prodBtn = document.querySelector(".prod-btn");
const solBtn = document.querySelector(".sol-btn");
const comBtn = document.querySelector(".com-btn");
const carBtn = document.querySelector(".car-btn");
const parBtn = document.querySelector(".par-btn");

const clsBtnPro = document.querySelector(".clsBtnPro");
const clsBtnSol = document.querySelector(".clsBtnSol");
const clsBtnCom = document.querySelector(".clsBtnCom");
const clsBtnCar = document.querySelector(".clsBtnCar");
const clsBtnPar = document.querySelector(".clsBtnPar");

let isOpen;

const init = function () {
  isOpen = false;

  mainBackground.classList.remove("hide");
  footer.classList.remove("hide");
  particleCanvas.classList.remove("hide");
  banner.classList.remove("hide");
  customerReferences.classList.remove("hide");
  awardReferences.classList.remove("hide");
  backgroundHolder.classList.remove("hide");
};
init();

prodBtn.addEventListener("click", function () {
  isOpen = true;

  if (isOpen == true) {
    mainBackground.classList.add("hide");
    footer.classList.add("hide");
    particleCanvas.classList.add("hide");
    banner.classList.add("hide");
    customerReferences.classList.add("hide");
    awardReferences.classList.add("hide");
    backgroundHolder.classList.add("hide");
  }
});

solBtn.addEventListener("click", function () {
  isOpen = true;

  if (isOpen == true) {
    mainBackground.classList.add("hide");
    footer.classList.add("hide");
    particleCanvas.classList.add("hide");
    banner.classList.add("hide");
    customerReferences.classList.add("hide");
    awardReferences.classList.add("hide");
    backgroundHolder.classList.add("hide");
  }
});

comBtn.addEventListener("click", function () {
  isOpen = true;

  if (isOpen == true) {
    mainBackground.classList.add("hide");
    footer.classList.add("hide");
    particleCanvas.classList.add("hide");
    banner.classList.add("hide");
    customerReferences.classList.add("hide");
    awardReferences.classList.add("hide");
    backgroundHolder.classList.add("hide");
  }
});

carBtn.addEventListener("click", function () {
  isOpen = true;

  if (isOpen == true) {
    mainBackground.classList.add("hide");
    footer.classList.add("hide");
    particleCanvas.classList.add("hide");
    banner.classList.add("hide");
    customerReferences.classList.add("hide");
    awardReferences.classList.add("hide");
    backgroundHolder.classList.add("hide");
  }
});

parBtn.addEventListener("click", function () {
  isOpen = true;

  if (isOpen == true) {
    mainBackground.classList.add("hide");
    footer.classList.add("hide");
    particleCanvas.classList.add("hide");
    banner.classList.add("hide");
    customerReferences.classList.add("hide");
    awardReferences.classList.add("hide");
    backgroundHolder.classList.add("hide");
  }
});

clsBtnPro.addEventListener("click", function () {
  init();
});

clsBtnSol.addEventListener("click", function () {
  init();
});

clsBtnCom.addEventListener("click", function () {
  init();
});

clsBtnCar.addEventListener("click", function () {
  init();
});

clsBtnPar.addEventListener("click", function () {
  init();
});
