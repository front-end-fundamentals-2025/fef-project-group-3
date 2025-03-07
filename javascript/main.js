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

/* Switching Pictures Product 1 start help Eveline Videos */

const nextButton = document.querySelector(".next-img");
const previousButton = document.querySelector(".previous-img");
const productImages = document.querySelector(".product-images");

nextButton.addEventListener("click", function (image) {
  productImages.style.backgroundImage = "url('../images/homepage-mockup1.jpg')";
});

previousButton.addEventListener("click", function (image) {
  productImages.style.background = "";
});

/* Switching Pictures Product 1 end help Eveline Videos */

/* Filters button - Start*/

const filterButton = document.querySelector(".filter");
const filtersDropdown = document.querySelector(".dropdown-filters");

filterButton.addEventListener("click", function (event) {
  filtersDropdown.classList.toggle("dropdown-filters-show");
});

/* Filters button - end*/

/* SHOPPING CART TAB */
// let iconCart = document.querySelector(".icon-cart");
// let closeCart = document.querySelector(".close");
// let body = document.querySelector("body");

// iconCart.addEventListener("click", () => {
//   body.classList.toggle("showCart");
// });

// closeCart.addEventListener("click", () => {
//   body.classList.toggle("showCart");
// });

/* CORRECT METHOD W/ OBJECT (not done at all) */

// Store object

// localStorage.student = JSON.stringify(student);

// Fetch object

// let newStudent = JSON.parse(localStorage.student);
// console.log(newStudent.name);
