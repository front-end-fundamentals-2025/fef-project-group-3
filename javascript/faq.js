/* shipping button - Start*/
const shippingButton = document.querySelector(".faq-shipping");
const shippingDropDown = document.querySelector(".dropdown-faq-shipping");

shippingButton.addEventListener("click", function (event) {
  shippingDropDown.classList.toggle("dropdown-faq-shipping-show");
});
/*shipping button - End*/

/* returns button - Start*/
const returnsButton = document.querySelector(".faq-returns");
const returnsDropDown = document.querySelector(".dropdown-faq-returns");

returnsButton.addEventListener("click", function (event) {
  returnsDropDown.classList.toggle("dropdown-faq-returns-show");
});
/* returns button - End*/

/* wrong product button - Start*/
const wrong_productButton = document.querySelector(".faq-wrong-product");
const wrong_productDropDown = document.querySelector(
  ".dropdown-faq-wrong-product"
);

wrong_productButton.addEventListener("click", function (event) {
  wrong_productDropDown.classList.toggle("dropdown-faq-wrong-product-show");
});
/* wrong product - End*/

/* order status button - Start*/
const order_statusButton = document.querySelector(".faq-order-status");
const order_statusDropDown = document.querySelector(
  ".dropdown-faq-order-status"
);

order_statusButton.addEventListener("click", function (event) {
  order_statusDropDown.classList.toggle("dropdown-faq-order-status-show");
});
/* order status button - End*/

/* broken product button - Start*/
const broken_productButton = document.querySelector(".faq-broken-product");
const broken_productDropDown = document.querySelector(
  ".dropdown-faq-broken-product"
);

broken_productButton.addEventListener("click", function (event) {
  broken_productDropDown.classList.toggle("dropdown-faq-broken-product-show");
});
/* broken product button - End*/
