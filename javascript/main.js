// const nextButtonElement = document.getElementsByClassName("next-img");
// const imagesSlidesElement = document.getElementsByClassName(
//   "product1-img-container"
// );

/*Specifications buttons - Start*/

const contentsButton = document.querySelector("product-contents");
// const specificationsButton = document.getElementsByClassName(
//   "product-specifications"
// );
// const reviewsButton = document.getElementsByClassName("product-reviews");
const contentsInfo = document.getElementsByClassName("product-contents-info");

contentsButton.addEventListener("click", function (event) {
  contentsInfo.innerText = "";
});

/*Specifications buttons - End*/
