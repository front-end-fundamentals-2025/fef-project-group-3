//youtube video//
const iconCart = document.querySelector("#cart_icon");
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
});

// add_to_cartButton.forEach((add_to_cartButton) => {
//   const ourList = document.getElementById("inner-list");
// });

const initApp = () => {
  fetch("javascript/products.json")
    .then((response) => response.json())
    .then((products) => {
      listCart = products;
      console.log(listCart);
    });
};
initApp();

// add_to_cartButton.forEach((add_to_cartButton) => {
//     const product = document.getElementById("inner-list");
//   });

//   add_to_cartButton.addEventListener("click", function (event) {
//     cartTab.classList.toggle("showCart");
//   });

// add_to_cartButton.addEventListener("click", function (event) {
//     cartTab.classList.toggle("showCart");
//   });
