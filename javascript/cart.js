/* SHOPPING CART TAB */
const iconCart = document.querySelector("#cart_icon");
const closeCart = document.querySelector(".close_carttab");
const cartTab = document.querySelector(".cartTab");
const innerList = document.querySelector("#inner-list");
const cartItem = document.querySelector(".cart_item");

iconCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

closeCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

iconCart.addEventListener("click", function (event) {
  innerList.appendChild(cartItem);
});
