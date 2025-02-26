/*Kit Contents buttons - Start*/

const contentsButton = document.querySelector(".product-contents");
const contentsDropDown = document.querySelector(".dropdown-product-contents");

contentsButton.addEventListener("click", function (event) {
  contentsDropDown.classList.toggle("dropdown-product-contents-show");
});

/*kit contents buttons - End*/

/* More information button - Start*/

const informationButton = document.querySelector(".product-specifications");
const informationDropDown = document.querySelector(
  ".dropdown-product-specifications"
);

informationButton.addEventListener("click", function (event) {
  informationDropDown.classList.toggle("dropdown-product-specifications-show");
});

/* More information button - End*/

/* Reviews button - Start*/

const reviewsButton = document.querySelector(".product-reviews");
const reviewsDropDown = document.querySelector(".dropdown-product-reviews");

reviewsButton.addEventListener("click", function (event) {
  reviewsDropDown.classList.toggle("dropdown-product-reviews-show");
});

/* Reviews Button - End*/

/* Switching Pictures Product 1 start help https://www.w3schools.com/css/css_z-index.asp*/

const nextButton = document.querySelector(".next-img");
const productImages = document.querySelector(".product-images");

nextButton.addEventListener("click", function (event) {
  productImages.style.backgroundColour = "000000";
});

/* SHOPPING CART TAB */
let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
