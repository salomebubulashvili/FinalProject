let navigationElement = document.getElementById ("navigation");
let burgerBar = document.getElementById ("burgerbar");

burgerBar.addEventListener("click", function() {
    navigationElement.classList.toggle("newNavigation");
});