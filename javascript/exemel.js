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

