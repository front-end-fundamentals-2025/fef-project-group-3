/* EXEMPEL FROM VIDEO */

/* STRINGS */
/* store data */
let item = "PARTY PRINCESS KIT";
localStorage.item = item;

/* retrieve data */
let newItem = localStorage.item;
console.log(newItem);

/* NUMBERS */
/* store data */
let quantity = 3;
localStorage.quantity = quantity;

/* retrieve data */
let newQuantity = parseInt(localStorage.quantity);
console.log(newQuantity + 1);

/* ARRAYS */
/* store data */
let animals = ["dog", "cat", "horse"];
localStorage.animals = JSON.stringify(animals);

/* retrieve data */
let newAnimals = JSON.parse(localStorage.animals);
console.log(newAnimals);
// console.log(newAnimals[0]);

/* OBJECTS */
/* store data */
let dog = { name: "Ellie", breed: "Golden retriever" };
localStorage.dog = JSON.stringify(dog);

/* retrieve data */
let newDog = JSON.parse(localStorage.dog);
console.log(newDog);
// console.log(newDog.name);

/* let item
              cart_itemElement
              localStorage.item = item; */

const iconCart = document.querySelector("#cart_icon");
const closeCart = document.querySelector(".close_carttab");
const cartTab = document.querySelector(".cartTab");
const add_to_cartElement = document.querySelectorAll(".add-to-cart");
const innerList = document.querySelector(".inner-list");
const cartItem = document.getElementsByClassName("cart_item");

iconCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

closeCart.addEventListener("click", function (event) {
  cartTab.classList.toggle("showCart");
});

listCart.innerHTML = localStorage.cart_item;

add_to_cartElement.addEventListener("click", function (event) {
  let cart_item = innerList.value;
  innerList.innerHTML = cart_item;
  localStorage.cart_item = cart_item;
});
