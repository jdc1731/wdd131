const currentYear = new Date().getFullYear();

document.querySelector('#current-year').textContent = `${currentYear}`;

const lastModifiedDate = document.lastModified;
document.querySelector('#last-modified').textContent = `Date Last Modified ${lastModifiedDate}`;

document.addEventListener("DOMContentLoaded", function () {


    const menuButton = document.querySelector(".menu-icon");
    const navMenu = document.getElementById("nav-menu");

    if (menuButton) {
        menuButton.addEventListener("click", function () {
            if (navMenu.style.display === "flex") {
                navMenu.style.display = "none";
            } else {
                navMenu.style.display = "flex";
            }
        });
    }
});

