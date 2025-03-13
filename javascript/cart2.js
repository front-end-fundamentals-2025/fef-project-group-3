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
const add_to_cartButton = document.querySelectorAll(".add-to-cart");
// let listProductHTML = document.querySelector(".listCart");

// let listProducts = [];

/* if (localStorage.item) {
    cart_itemElement. = localStorage. ;
} else {
    cart_itemElement. = "";
}
 */

/*Spara i local Storage sen if statement*/
// add_to_cartElement.addEventListener("click", function (event) {
//   let cart_item = innerList.value;
//   innerList.innerHTML = cart_item;
//   localStorage.cart_item = cart_item;
// });

/* done with the help of lab assistents */
add_to_cartButton.forEach((add_to_cartButton) => {
  const ourList = document.getElementById("inner-list");

  fetch("javascript/products.json")
    .then((response) => response.json())
    .then((products) => {
      add_to_cartButton.addEventListener("click", function (event) {
        cartTab.classList.toggle("showCart");

        const dataId = add_to_cartButton.getAttribute("data-id");
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
          "'</span> '";
        "<div class='cart-item-quantity'>" +
          "'<span class='quantity_minus'>-</span>'" +
          "'<span class='quantity_number'>1</span>'" +
          "'<span class='quantity_plus'>+</span>'" +
          "</div>" +
          "</li>";

        ourList.innerHTML += itemDetails;
        console.log(addItem.productPrice);

        localStorage.products = JSON.stringify.ourList(add_to_cartElement);
        // let newitemDetails = JSON.parse(localStorage.itemDetails);
      });
    });
});


/* FÖRSÖK 2 */

//youtube video//
/* const iconCart = document.querySelector("#cart_icon");
const closeCart = document.querySelector(".close_carttab");
const cartTab = document.querySelector(".cartTab");
const add_to_cartButton = document.querySelectorAll(".add-to-cart");
let listCartHTML = document.querySelector(".listCart");

let listCart = [];

iconCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

closeCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
}); */

// add_to_cartButton.forEach((add_to_cartButton) => {
//   const ourList = document.getElementById("inner-list");
// });

/* const initApp = () => {
  fetch("javascript/products.json")
    .then((response) => response.json())
    .then((products) => {
      listCart = products;
      console.log(listCart);
    });
};
initApp();
 */
// add_to_cartButton.forEach((add_to_cartButton) => {
//     const product = document.getElementById("inner-list");
//   });

//   add_to_cartButton.addEventListener("click", function (event) {
//     cartTab.classList.toggle("showCart");
//   });

// add_to_cartButton.addEventListener("click", function (event) {
//     cartTab.classList.toggle("showCart");
//   });

