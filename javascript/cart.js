/* SHOPPING CART TAB */
const iconCart = document.querySelector("#cart_icon");
const closeCart = document.querySelector(".close_carttab");
const cartTab = document.querySelector(".cartTab");
const innerList = document.querySelector("#inner-list");
const cartItem = document.createElement("li");
const addToCartButton = document.querySelector(".add-to-cart");
const removeItemButton = document.querySelector("#remove-item");

cartItem.classList.add("cart_item");
cartItem.innerText = "PARTY PRINCESS KIT - 149 KR";
let item = "PARTY PRINCESS KIT - 149KR";

addToCartButton.addEventListener("click", function (event) {
  innerList.appendChild(cartItem);
  let newItem = cartItem.value;
  localStorage.newItem = newItem;
});

removeItemButton.addEventListener("click", function (event) {
  cartItem.remove();
});

iconCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

closeCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});
