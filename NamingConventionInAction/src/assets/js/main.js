
/* === Search-Form === */

// Add
document.querySelector(".search-btn").addEventListener("click", function() {
    const headerSearchForm = document.querySelector(".header-search-form");
    headerSearchForm.classList.add("active")
});

// Remove
document.querySelector(".search-close").addEventListener("click", function() {
    const headerSearchForm = document.querySelector(".header-search-form");
    headerSearchForm.classList.remove("active")
});

//* === Aside-Section === */

// Add
document.querySelector(".aside-btn").addEventListener("click", function() {
    const headerSearchForm = document.querySelector(".aside-items");
    headerSearchForm.classList.add("active")
});

// Remove
document.querySelector(".nav-aside-close").addEventListener("click", function() {
    const headerSearchForm = document.querySelector(".aside-items");
    headerSearchForm.classList.remove("active")
});

