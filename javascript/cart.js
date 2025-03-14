/* SHOPPING CART TAB */

const iconCart = document.querySelector("#cart_icon");
const closeCart = document.querySelector(".close_carttab");
const cartTab = document.querySelector(".cartTab");
const innerList = document.querySelector("#inner-list");
const cartItem = document.createElement("li");
const addToCartButton = document.querySelector(".add-to-cart");
const removeItemButton = document.querySelector("#remove-item");

/* ADDING CSS CLASS FOR STYLING */
cartItem.classList.add("cart_item");

/* SET CART ITEM TEXT */
cartItem.innerText = "PARTY PRINCESS KIT - 149 KR";
let item = "PARTY PRINCESS KIT - 149KR";

/* OPENING CART TAB */
iconCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

/* CLOSING CART TAB */
closeCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

/* LOAD ITEM IF IT IS SAVED IN LOCAL STORAGE */
if (localStorage.newItem && !document.querySelector(".cart_item")) {
  innerList.appendChild(cartItem);
}

/* ADDING ITEM TO CART AND SAVING IN LOCAL STORAGE */
if (document.querySelector(".product-page")) {
  addToCartButton.addEventListener("click", function (event) {
    let newItem = "true";

    localStorage.newItem = newItem;

    innerList.appendChild(cartItem);
  });
}

/* REMOVING ITEM FROM CART & LOCAL STORAGE */
removeItemButton.addEventListener("click", function (event) {
  cartItem.remove();
  localStorage.removeItem("newItem");
});
