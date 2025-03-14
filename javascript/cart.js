/* SHOPPING CART TAB */
const iconCart = document.querySelector("#cart_icon");
const closeCart = document.querySelector(".close_carttab");
const cartTab = document.querySelector(".cartTab");
const innerList = document.querySelector("#inner-list");
const cartItem = document.createElement("li");
const addToCartButton = document.querySelector(".add-to-cart");
const removeItemButton = document.querySelector("#remove-item");

cartItem.classList.add(
  "cart_item"
); /* Adding CSS to li =cart item from cartCSS*/
cartItem.innerText =
  "PARTY PRINCESS KIT - 149 KR"; /* Defining what the li element should say */
let item = "PARTY PRINCESS KIT - 149KR"; /* this we did from evelines video */

/* opening cart */
iconCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

/* closing cart */
closeCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

if (localStorage.newItem && !document.querySelector(".cart_item")) {
  innerList.appendChild(cartItem);
}

/* When add to cart button is pressed, "li" = cart item is added to inner list, which is the list inside the cart tab */
addToCartButton.addEventListener("click", function (event) {
  let newItem =
    "true"; /*  the value of the cart item is stored in the new item*/

  localStorage.newItem =
    newItem; /* and this says that a new item + the locally stored value = new item */

  innerList.appendChild(cartItem);
});

/* removing li = cartItem from inner List */
removeItemButton.addEventListener("click", function (event) {
  cartItem.remove();
  localStorage.removeItem("newItem");
});
