const currentYear = new Date().getFullYear();

document.querySelector('#current-year').textContent = `${currentYear}`;

const lastModifiedDate = document.lastModified;
document.querySelector('#last-modified').textContent = `Date Last Modified ${lastModifiedDate}`;

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", function () {
        // Toggle the menu visibility
        if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "block";
        }
    });
});
