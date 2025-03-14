/* FILTER BUTTON */
const filterButton = document.querySelector(".filter");
const filtersDropdown = document.querySelector(".dropdown-filters");

filterButton.addEventListener("click", function (event) {
  filtersDropdown.classList.toggle("dropdown-filters-show");
});
