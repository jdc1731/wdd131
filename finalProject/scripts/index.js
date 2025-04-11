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

  //  Info display and toggle logic
  let infoShowing = false;
  const infoSection = document.getElementById("info-section");

  document.querySelectorAll(".equine-photo").forEach(photo => {
    photo.style.cursor = "pointer"; 

    photo.addEventListener("click", (e) => {
      const type = photo.dataset.type;
      const equine = equineInfo[type];

      // Show info where the photo was clicked
      const photoRect = photo.getBoundingClientRect();
      infoSection.style.position = 'absolute'; 
      infoSection.style.top = `${photoRect.top}px`;
      infoSection.style.left = `${photoRect.left}px`;
      infoSection.style.width = `${photoRect.width}px`; 

      infoSection.innerHTML = `
        <h2>${equine.name}</h2>
        <p>${equine.description}</p>
      `;

      // Hide the photo
      photo.style.display = "none";
      infoSection.style.display = "block";
      infoShowing = true;

      // Prevent triggering the body click right away
      e.stopPropagation();

      // Save which photo to re-show later
      infoSection.dataset.lastPhotoId = photo.id;
    });
  });

  // Click anywhere else to reset view
  document.addEventListener("click", () => {
    if (infoShowing) {
      const lastPhotoId = infoSection.dataset.lastPhotoId;
      const lastPhoto = document.getElementById(lastPhotoId);

      if (lastPhoto) lastPhoto.style.display = "block";
      infoSection.style.display = "none";
      infoSection.innerHTML = "";
      infoShowing = false;
    }
  });
});



