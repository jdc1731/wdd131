const currentYear = new Date().getFullYear();

document.querySelector('#current-year').textContent = `${currentYear}`;

const lastModifiedDate = document.lastModified;
document.querySelector('#last-modified').textContent = `Date Last Modified ${lastModifiedDate}`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.querySelector('#product-name')
const productList = document.querySelector('#product-name');

products.forEach(product => {
    const option = document.createElement('option');
    option.textContent = product.name;
    productList.appendChild(option);
})

let reviewCount = localStorage.getItem('reviewCount') || 0;
reviewCount = parseInt(reviewCount + 1);
localStorage.setItem('reviewCount', reviewCount);
