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

const herd = [
  {
    equineName: "Ridonkulous",
    age: "2",
    breed: "Burro",
    gender: "Female",
    info: "Ridonkulous was born wild and we purchased her from the BLM after a roundup. She is extremely sweet and loves to be around people. She loves treats. ",
    image: "images/ridonk.webp"
    },
    {
    equineName: "Badonkeydonk",
    age: "2",
    breed: "Burro",
    gender: "female",
    info: "Badonkeydonk was born wild and we purchased her from the BLM after a roundup. She is more cautious than Ridonkylous but is very sweet once she warms up to you. ",
    image: "images/badonk.webp"
    },
    {
    equineName: "Burrito",
    age: "5 months",
    breed: "Burro",
    gender: "female",
    info: "Burrito comes from the BLM her mom was wild born, but she was born at a BLM holding facitlity. She is new to the herd and is still learning to trust people.",
    image: "images/burrito.webp"
    },
    {
    equineName: "Cricket",
    age: "17",
    breed: "Thoroughbred",
    gender: "female",
    info: "Cricket is a little bit of a nervous wreck. She sat in a field most of her life not being handled. Since we purchased her, she has turned into an excellent speed event horse.",
    image: "images/cricket.webp"
    },
    {
    equineName: "Illusion",
    age: "8",
    breed: "Tennessee Walker",
    gender: "female",
    info: "Illusion is a rescue from a kill pen in kentucky. She was marked to be shipped for slaughter. I bought her without seeing her and has her shipped to Utah. She was extremely sick and skinny, but has since turned into a healthy and excellent kids horse. She is a bit of a diva.",
    image: "images/illusion.webp"
    },
    {
    equineName: "Siren",
    age: "3",
    breed: "Mustang",
    gender: "female",
    info: "Siren is a wild born mustang. She is extremely smart and affectionate. She is currently being trained for riding and is doing awesome. I am excited to see what she can do.",
    image: "images/siren.webp"
    },
    {
    equineName: "Durpleton",
    age: "4",
    breed: "Mini Pony",
    gender: "male",
    info: "Durpleton or Durpy for short was originally a rodeo school pony. He was used to teach young children how to ride a bucking horse. He didn't buck the way they wanted and they sold him to us. He was completely wild and terrified when we got him. Now the kids ride him and he is a pampered spoiled brat.",
    image: "images/durpy.webp"
    }
  ];

  createHerdCards(herd);

  function createHerdCards(herd) {
    herd.forEach((equine) => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let age = document.createElement("p");
      let breed = document.createElement("p");
      let gender = document.createElement("p");
      let img = document.createElement("img");
      let info = document.createElement("p");

      name.textContent = equine.equineName;
      age.innerHTML = `<span class='label'>Age:</span> ${equine.age}`;
      breed.innerHTML = `<span class='label'>Breed:</span> ${equine.breed}`;
      gender.innerHTML = `<span class='label'>Gender:</span> ${equine.gender}`;
      info.innerHTML = `<span class='label'>Information:</span> ${equine.info}`;
      img.setAttribute("src", equine.image);
      img.setAttribute("alt", equine.name);
      img.setAttribute("loading", "lazy");
      img.setAttribute("width", "400");
      img.setAttribute("height", "250");

      card.appendChild(name);
      card.appendChild(age);
      card.appendChild(breed);
      card.appendChild(gender);
      card.appendChild(info);
      card.appendChild(img);

      document.querySelector(".equine-grid").appendChild(card);
    });
  }
