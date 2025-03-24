const currentYear = new Date().getFullYear();

document.querySelector('#current-year').textContent = `${currentYear}`;

const lastModifiedDate = document.lastModified;
document.querySelector('#last-modified').textContent = `Last Date Modified ${lastModifiedDate}`;

const calculateWindChill = (tempC, speedKmh) => {
    if (tempC <= 10 && speedKmh > 4.8) {
        const windChill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16);
        return windChill;
    }

    else {
        return 'N/A';
    }
}

function displayWindChill() {
    let tempC = parseFloat(document.getElementById('temp').textContent);
    let speedKmh = parseFloat(document.getElementById('wind-speed').textContent);

    let windChill = calculateWindChill(tempC, speedKmh);
    document.getElementById('windchill').textContent = windChill;
}
document.addEventListener('DOMContentLoaded', displayWindChill);