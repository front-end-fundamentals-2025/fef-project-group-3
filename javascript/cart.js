/* SHOPPING CART TAB */
const iconCart = document.querySelector("#cart_icon");
const closeCart = document.querySelector(".close_carttab");
const cartTab = document.querySelector(".cartTab");

iconCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

closeCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

/* CORRECT METHOD W/ OBJECT (not done at all) */

// Store object

/* localStorage.student = JSON.stringify(student);

// Fetch object
let newStudent = JSON.parse(localStorage.student);
console.log(newStudent.name);
 */

/* ADD ITEM TO CART */
const cart_itemElement = document.getElementsByClassName("cart_item");
const add_to_cartElement = document.querySelectorAll(".add-to-cart");

/* if (localStorage.item) {
    cart_itemElement. = localStorage. ;
} else {
    cart_itemElement. = "";
}
 */

/* done with the help of lab assistents */

/*Spara i local Storage sen if statement*/

add_to_cartElement.forEach((add_to_cartElement) => {
  const ourList = document.getElementById("inner-list");

  fetch("javascript/products.json")
    .then((response) => response.json())
    .then((products) => {
      add_to_cartElement.addEventListener("click", function () {
        cartTab.classList.toggle("showCart");

        const dataId = add_to_cartElement.getAttribute("data-id");
        const addItem = products[dataId];
        const itemDetails =
          "<li class='cart-item'><img src='" +
          addItem.image +
          "' alt='" +
          addItem.name +
          "' class='cart-item-image'> <span class='cart-item-name'> '" +
          addItem.productName +
          "'</span> <span class='cart-item-price'> '" +
          addItem.productPrice +
          "'</span> </li>";

        ourList.innerHTML += itemDetails;
        console.log(addItem.productPricerice);
      });
    });
});
