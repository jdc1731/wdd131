const currentYear = new Date().getFullYear();

document.querySelector('#current-year').textContent = `${currentYear}`;

const lastModifiedDate = document.lastModified;
document.querySelector('#last-modified').textContent = `Last Date Modified ${lastModifiedDate}`;