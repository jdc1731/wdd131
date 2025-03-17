const currentYear = new Date().getFullYear();

document.querySelector('#current-year').textContent = `${currentYear}`;

const lastModifiedDate = document.lastModified;
document.querySelector('#last-modified').textContent = `Date Last Modified ${lastModifiedDate}`;

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("open");

        // Toggle button icon between ☰ and ✖
        if (navMenu.classList.contains("open")) {
            menuButton.innerHTML = "&times;"; // X symbol
        } else {
            menuButton.innerHTML = "&#9776;"; 
        }
    });
});
