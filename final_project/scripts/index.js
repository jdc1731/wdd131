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

  //  Equine facts data
  const equineInfo = {
    horse: {
      name: "Horse",
      description: "Horses are large, strong animals used for riding, racing, and working. They are known for their speed, strength, and intelligence. Horses have been domesticated for thousands of years and have played a significant role in human history.",
    },
    donkey: {
      name: "Donkey",
      description: "Donkeys are known for their strength, intelligence, and long ears. Donkeys form strong bonds with their owners and herd mates. They bond for life. They are extremely loyal and protective. Donkeys are affectionate and enjoy being around people and other animals.",
    },
    pony: {
      name: "Pony",
      description: "Ponies are small horses with thick manes and sturdy builds.They are often used for riding and driving.They often think that they are bigger than they really are. They are very intelligent and can be trained to do many things.",
    }
  };

  document.querySelectorAll(".equine-photo").forEach(photo => {
    const container = photo.parentElement;
    const infoBox = container.querySelector(".info-section");

    photo.style.cursor = "pointer";

    photo.addEventListener("click", (e) => {
      const type = photo.dataset.type;
      const equine = equineInfo[type];

      infoBox.innerHTML = `
        <h2>${equine.name}</h2>
        <p>${equine.description}</p>
      `;

      photo.style.visibility = "hidden";
      infoBox.style.display = "block";
      e.stopPropagation();
    });

    document.addEventListener("click", () => {
      photo.style.visibility = "visible";
      infoBox.style.display = "none";
    });
  });
}); 

