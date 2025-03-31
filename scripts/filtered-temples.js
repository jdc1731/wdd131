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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 20",
    area: 72000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",    
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: 'Fairbanks Alaska',
    location: 'Fairbanks, Alaska, United States',
    dedicated: '2000, December, 17',
    area: 10000,
    imageUrl: 'https://churchofjesuschristtemples.org/assets/img/temples/fairbanks-alaska-temple/fairbanks-alaska-temple-55375-main.jpg'
  },
  // Add more temple objects here...
];

// Display all temples initially
createTempleCard(temples);

// Event listener for "Old" link
const oldTempleLink = document.querySelector("#old");
oldTempleLink.addEventListener("click", () => {
  const filteredOldTemples = temples.filter((temple) => {
    const oldYear = parseInt(temple.dedicated.split(",")[0]); // Extract year
    return oldYear < 1900; // Filter temples dedicated before 1900
  });

  // Clear the existing temple cards
  document.querySelector(".temple-grid").innerHTML = "";

  // Call createTempleCard to display the filtered temples
  createTempleCard(filteredOldTemples);
});

// Event listener for "New" link
const newTempleLink = document.querySelector("#new");
newTempleLink.addEventListener("click", () => {
  const filteredNewTemples = temples.filter((temple) => {
    const newYear = parseInt(temple.dedicated.split(",")[0]); // Extract year
    return newYear > 2000; // Filter temples dedicated after 2000
  });

  // Clear the existing temple cards
  document.querySelector(".temple-grid").innerHTML = "";

  // Call createTempleCard to display the filtered temples
  createTempleCard(filteredNewTemples);
});

// Event listener for "Large" link
const largeTempleLink = document.querySelector("#large");
largeTempleLink.addEventListener("click", () => {
  const filteredLargeTemples = temples.filter((temple) => {
    const largeArea = parseInt(temple.area); // Use temple.area directly as it's already a number
    return largeArea > 90000; // Filter temples with area greater than 90000
  });

  // Clear the existing temple cards
  document.querySelector(".temple-grid").innerHTML = "";

  // Call createTempleCard to display the filtered temples
  createTempleCard(filteredLargeTemples);
});

// Event listener for "Small" link
const smallTempleLink = document.querySelector("#small");
smallTempleLink.addEventListener("click", () => {
  const filteredSmallTemples = temples.filter((temple) => {
    const smallArea = parseInt(temple.area); // Use temple.area directly as it's already a number
    return smallArea < 10000; // Filter temples with area less than 10000
  });

  // Clear the existing temple cards
  document.querySelector(".temple-grid").innerHTML = "";

  // Call createTempleCard to display the filtered temples
  createTempleCard(filteredSmallTemples);
});

// Event listener for "Home" link
const homeTempleLink = document.querySelector("#home");
homeTempleLink.addEventListener("click", () => {
  // Clear the existing temple cards
  document.querySelector(".temple-grid").innerHTML = "";

  // Display all temples
  createTempleCard(temples);
});

// Function to create temple cards
function createTempleCard(filterTemples) {
  filterTemples.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class='label'>Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class='label'>Date Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class='label'>Area:</span> ${temple.area} sq. ft.`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temple-grid").appendChild(card);
  });
}