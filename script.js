"use strict";
const btnsOpenModel = document.querySelectorAll(".show-modal");
const btnCloseModel = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");
const modelEl = document.querySelector(".modal");

const showModel = function () {
  modelEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
};

const hideModel = function () {
  modelEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};
for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener("click", showModel);
}

btnCloseModel.addEventListener("click", hideModel);

//close modal on Esc key press also
//e is event object on key press passed when js itself calls this function when event happens
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modelEl.classList.contains("hidden")) {
    hideModel();
  }
});
