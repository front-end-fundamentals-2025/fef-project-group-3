/* KIT CONTENTS BUTTON */
const contentsButton = document.querySelector(".product-contents");
const contentsDropDown = document.querySelector(".dropdown-product-contents");

contentsButton.addEventListener("click", function (event) {
  contentsDropDown.classList.toggle("dropdown-product-contents-show");
});

/* MORE INFORMATION BUTTON */
const informationButton = document.querySelector(".product-specifications");
const informationDropDown = document.querySelector(
  ".dropdown-product-specifications"
);

informationButton.addEventListener("click", function (event) {
  informationDropDown.classList.toggle("dropdown-product-specifications-show");
});

/* REVIEWS BUTTON */
const reviewsButton = document.querySelector(".product-reviews");
const reviewsDropDown = document.querySelector(".dropdown-product-reviews");

reviewsButton.addEventListener("click", function (event) {
  reviewsDropDown.classList.toggle("dropdown-product-reviews-show");
});
