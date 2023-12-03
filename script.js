const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const row = document.getElementsByClassName("row");
let charactersVisible = true;
let button = document.getElementById("toggleButton");

function renderCharacters() {
  if (charactersVisible) {
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
      const templateLiteralString = `<div class="col-lg-4 pb-3">
        <div class="card">
        <img src="${character.pic}" class="card-img-top" width="100px" height="350px" alt="...">
           <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
              <p class="card-text">${character.homeworld}</p>
              
                </div>
                </div>
                </div>`;
      row[0].innerHTML += templateLiteralString;
    }
    charactersVisible = false;
    button.innerHTML = "Karakterleri Gizle";
    button.style.backgroundColor = "#e74c3c";
  } else {
    row[0].innerHTML = "";
    charactersVisible = true;
    button.innerHTML = "Karakterleri Göster";
    button.style.backgroundColor = "#0d6efd";
  }
}

// homeworld bir array içerisinde listeleme //
let homeworldsRaw = characters.map(function (character) {
  return character.homeworld ?? "other"; // undefined olan bir değeri other olarak değiştirdik //
});
console.log(homeworldsRaw);

// tekrarlayan homeworldleri temizlemek ve hepsinden 1 tana olarak kullanmak //
let homeworldsUnique = [...new Set(homeworldsRaw)];
console.log(homeworldsUnique);

// map fonksiyonu kullanılarak tüm karakterler küçük harf ile başlıyor yapıldı. for döngüsünü hocaya sor  //
let homeworldsLowercase = homeworldsUnique.map((str) => str.toLowerCase());
console.log(homeworldsLowercase);

// değişkenin ismini değiştirdik//
let homeworlds = homeworldsLowercase;
console.log(homeworlds);


// filtreleme //
let form = document.getElementById("homeworldForm");
let filteredHomeworld;

homeworlds.forEach(function (homeworld, index) {
  let input = document.createElement("input");
  let label = document.createElement("label");
  let container = document.createElement("div");

  input.type = "radio";
  input.name = "homeworldRadio";
  input.value = homeworld;
  input.id = "homeworldRadio" + (index + 1);
  input.className = "form-check-input";

  label.htmlFor = "homeworldRadio" + (index + 1);
  label.className = "form-check-label";
  label.appendChild(document.createTextNode(homeworld));

  container.className = "form-check";
  container.appendChild(input);
  container.appendChild(label);

  form.appendChild(container);
});


