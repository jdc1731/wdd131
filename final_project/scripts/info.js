document.addEventListener('DOMContentLoaded', () => {
    //  Update current year and last modified
    const currentYear = new Date().getFullYear();
    document.querySelector('#current-year').textContent = `${currentYear}`;
    const lastModifiedDate = document.lastModified;
    document.querySelector('#last-modified').textContent = `Date Last Modified ${lastModifiedDate}`;

    //  Mobile menu toggle
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("open");
        menuButton.innerHTML = navMenu.classList.contains("open") ? "&times;" : "&#9776;";
    });
}); 

// Save the email to localStorage on form submission
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const emailInput = document.getElementById('newsletterEmail');
  const emailValue = emailInput.value.trim();

  if (emailValue) {
    localStorage.setItem('savedEmail', emailValue);
    alert('Thank you! Your email has been saved.');
    emailInput.value = ''; 
  } else {
    alert('Please enter a valid email address.');
  }
});
