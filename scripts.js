/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */



// This is an array of strings (TV show titles)
// My data will Pokemon Card Catalog, just gen 1 of Pokemon
// data structure is just simple array
let cards = [
  {
    id: 1,
    name: "Bulbasaur",
    set: "Expedition E-series 2002",
    rarity: "Reverse Holo",
    type: "Grass",
    price: 363,
    image: "assets/images/bulbasaur.jpg",
  },
  {
    id: 2,
    name: "Charmander",
    set: "McDonalds Promo 2002",
    rarity: " Holo",
    type: "Fire",
    price: 393,
    image: "assets/images/charmander.jpg",
  },
  {
    id: 3,
    name: "Squirtle",
    set: "McDonalds Promo 2002",
    rarity: "Holo",
    type: "Water",
    price: 877,
    image: "assets/images/squirtle.jpg",
  },
  {
    id: 4,
    name: "Charizard",
    set: "Base Set (1st edition and shadowless) ",
    rarity: "Holo Rare",
    type: "Fire",
    price: 168000,
    image: "assets/images/charizard.jpg",
  },
  {
    id: 5,
    name: "Blastoise",
    set: "Base Set (1st edition and shadowless)",
    rarity: "Holo Rare",
    type: "Water",
    price: 1600,
    image: "assets/images/blastoise.jpg",
  },
  {
    id: 6,
    name: "Venusaur",
    set: "Base Set (1st edition and shadowless) ",
    rarity: "Holo Rare",
    type: "Grass",
    price: 1401,
    image: "assets/images/venusaur.jpg",
  },
  {
    id: 7,
    name: "Pikachu",
    set: "Tournament Promo card",
    rarity: "Promo ",
    type: "Electric",
    price: 350000,
    image: "assets/images/pikachu.png",
  },
  {
    id: 8,
    name: "Mewtwo",
    set: "EX Holon Phantoms ",
    rarity: "Ultra Rare",
    type: "Psychic",
    price: 6000,
    image: "assets/images/mewtwo.jpg",
  },
  {
    id: 9,
    name: "Gyarados",
    set: "Neo Revelation",
    rarity: "Secret Rare",
    type: "Water",
    price: 1688,
    image: "assets/images/gyarados.webp",
  },
  {
    id: 10,
    name: "Alakazam",
    set: "EX Crystal Guardians",
    rarity: "Ultra Rare",
    type: "Psychic",
    price: 1550,
    image: "assets/images/alakazam.jpg",
  },
  {
    id: 11,
    name: "Machamp",
    set: "League and championship cards",
    rarity: "Holo Rare",
    type: "Fighting",
    price: 2500,
    image: "assets/images/machamp.jpg",
  },
  {
    id: 12,
    name: "Raichu",
    set: "Prerelease Promo",
    rarity: "Ultra Rare",
    type: "Electric",
    price: 10000,
    image: "assets/images/raichu.jpg",
  },
  {
    id: 13,
    name: "Dragonite",
    set: "T Promotional cards",
    rarity: "Promo",
    type: "Normal",
    price: 1066,
    image: "assets/images/dragonite.jpg",
  },
  {
    id: 14,
    name: "Zapdos",
    set: "Unnumbered Promos (1999)",
    rarity: "Promo ",
    type: "Electric",
    price: 4826,
    image: "assets/images/zapdos.webp",
  },
  {
    id: 15,
    name: "Articuno",
    set: "EX Team Rocket Returns ",
    rarity: "Ultra Rare",
    type: "Water",
    price: 480,
    image: "assets/images/articuno.webp",
  },
  {
    id: 16,
    name: "Moltres",
    set: "EX Team Rocket Returns",
    rarity: "Ultra Rare",
    type: "Fire",
    price: 498,
    image: "assets/images/moltres.jpg",
  },
  {
    id: 17,
    name: "Snorlax",
    set: "Rising Rivals",
    rarity: "Ultra Rare",
    type: "Normal",
    price: 797,
    image: "assets/images/snorlax.jpg",
  },
  {
    id: 18,
    name: "Lapras",
    set: "L-P Promotional Cards",
    rarity: "Promo ",
    type: "Water",
    price: 300,
    image: "assets/images/lapras.jpg",
  },
  {
    id: 19,
    name: "Eevee",
    set: "Unumbered Promos (2000)",
    rarity: "Promo",
    type: "Normal",
    price: 1500,
    image: "assets/images/eevee.jpeg",
  },
  {
    id: 20,
    name: "Jolteon",
    set: "EX Power Keepers",
    rarity: "Ultra Rare",
    type: "Electric",
    price: 2950,
    image: "assets/images/jolteon.jpg",
  },
  {
    id: 21,
    name: "Flareon",
    set: "PLAY Promotional cards",
    rarity: "Promo",
    type: "Fire",
    price: 4050,
    image: "assets/images/flareon.jpg",
  },
  {
    id: 22,
    name: "Vaporeon",
    set: "PLAY Promotional cards",
    rarity: "Promo",
    type: "Water",
    price: 2300,
    image: "assets/images/vaporeon.jpg",
  },
  {
    id: 23,
    name: "Dragonair",
    set: "League and Championship cards",
    rarity: "Promo",
    type: "Normal",
    price: 449,
    image: "assets/images/dragonair.jpeg",
  },
  {
    id: 24,
    name: "Gengar",
    set: "Sword and Shield Promo",
    rarity: "Promo",
    type: "Psychic",
    price: 4500,
    image: "assets/images/gengar.jpg",
  },
  {
    id: 25,
    name: "Arcanine",
    set: "Neo Destiny (1st edition)",
    rarity: "Holo Rare",
    type: "Fire",
    price: 650,
    image: "assets/images/arcanine.jpg",
  },
  {
    id: 26,
    name: "Clefairy",
    set: "Sun and Moon Promos JP",
    rarity: "Promo",
    type: "Psychic",
    price: 500,
    image: "assets/images/clefairy.jpg",
  },
  {
    id: 27,
    name: "Chansey",
    set: "Base set (1st edition)",
    rarity: "Holo Rare",
    type: "Normal",
    price: 400,
    image: "assets/images/chansey.jpg",
  },
  {
    id: 28,
    name: "Nidoking",
    set: "Aquapolis",
    rarity: "Secret Rare",
    type: "Normal",
    price: 560,
    image: "assets/images/nidoking.jpg",
  },
  {
    id: 29,
    name: "Mew",
    set: "Pokemon Chinese Promo",
    rarity: "Promo ",
    type: "Psychic",
    price: 9866,
    image: "assets/images/mew.jpg",
  },
  {
    id: 30,
    name: "Magneton",
    set: "Base set (1st edition and shadowless)",
    rarity: "Holo Rare",
    type: "Electric",
    price: 303,
    image: "assets/images/magneton.jpg",
  },
  {
    id: 31,
    name: "Poliwrath",
    set: "Base set (1st edition and shadowless)",
    rarity: "Holo Rare",
    type: "Water",
    price: 500,
    image: "assets/images/poliwrath.jpg",
  },
  {
    id: 32,
    name: "Hitmonchan",
    set: "Base set (1st edition and shadowless)",
    rarity: "Holo Rare",
    type: "Fighting",
    price: 254,
    image: "assets/images/hitmonchan.jpg",
  },

];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

let displayedCards = [...cards]; // This is an array of the cards currently being displayed on the page

// DISPLAY function
function showCards(cardList) {
  const cardContainer = document.getElementById("card-container");
  const templateCard = document.querySelector(".card");

  // Clear previous cards so we can re-render updated results
  cardContainer.innerHTML = "";

  // Loop through each card object in the list
  for (let i = 0; i < cardList.length; i++) {
    const cardData = cardList[i];

    // Clone the template card from HTML
    const nextCard = templateCard.cloneNode(true);

    // Fill the cloned card with real data
    editCardContent(nextCard, cardData);

    // Add the card to the page
    cardContainer.appendChild(nextCard);
  }

  // Update the results count text
  updateResultsCount(cardList.length);
}

// // This function adds cards the page to display the data in the array

// function showCards() {
//   const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = "";
//   const templateCard = document.querySelector(".card");

//   for (let i = 0; i < titles.length; i++) {
//     let title = titles[i];

//     // This part of the code doesn't scale very well! After you add your
//     // own data, you'll need to do something totally different here.
//     let imageURL = "";
//     if (i == 0) {
//       imageURL = FRESH_PRINCE_URL;
//     } else if (i == 1) {
//       imageURL = CURB_POSTER_URL;
//     } else if (i == 2) {
//       imageURL = EAST_LOS_HIGH_POSTER_URL;
//     }

//     const nextCard = templateCard.cloneNode(true); // Copy the template card
//     editCardContent(nextCard, title, imageURL); // Edit title and image
//     cardContainer.appendChild(nextCard); // Add new card to the container
//   }
// }
// 

function editCardContent(card, cardData) {
  card.style.display = "block";

  // retrieve elements inside the card
  const cardHeader = card.querySelector("h2");
  const cardImage = card.querySelector("img");
  const cardText = card.querySelector("p");

  cardImage.src = cardData.image;
  cardImage.alt = cardData.name + " card image";
  cardHeader.textContent = cardData.name;

  //combine multiple properties into one string to display in the card text
  cardText.textContent = `Set: ${cardData.set} | Rarity: ${cardData.rarity} | Type: ${cardData.type} | Price: $${cardData.price.toFixed(2)}`;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
}
//Results Count

//Displays how many cards are currently shown
function updateResultsCount(count) {
  const resultsText = document.getElementById("results-count");

  if (resultsText) {
    resultsText.textContent = `Showing ${count} card${count !== 1 ? "s" : ""}`;
  }
}

// Methods --> filter , search, sort

//function applies all methods at once
console.log("Applying filters...");
function applyFilters(){
  //Retrieve user input values
  const searchValue = document.getElementById("search-input").value.toLowerCase();
  const typeValue = document.getElementById("type-filter").value;
  const sortValue = document.getElementById("sort-select").value;

  //S1: filter data based on search + type
  let filtredCards = cards.filter((card) => {
    //check if card name includes search text
    const matchesSearch = card.name.toLowerCase().includes(searchValue);

    //check if card type matches selected type
    const matchesType = typeValue === "All" || card.type === typeValue;
    return matchesSearch && matchesType;
  });

  //S2: sort data based on selected sort option
  if (sortValue === "name-az") {
    filtredCards.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === "price-low-high") {
    filtredCards.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-high-low") {
    filtredCards.sort((a, b) => b.price - a.price);
  }

  //update displayed cards and re-render
  displayedCards = filtredCards;
  showCards(displayedCards);
}

//JS code for randomCard feature
function showRandomCard() {
  const randomCardContainer = document.getElementById("random-card-result");

  if (displayedCards.length === 0) {
    randomCardContainer.innerHTML = "<p>No cards available to display.</p>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * displayedCards.length);
  const randomCard = displayedCards[randomIndex];

  randomCardContainer.innerHTML = `
    <div class="card random-card">
      <div class="card-content">
        <img src="${randomCard.image}" alt="${randomCard.name} card image"/>
        <h2>${randomCard.name}</h2>
        <p>
          Set: ${randomCard.set} | 
          Rarity: ${randomCard.rarity} | 
          Type: ${randomCard.type} | 
          Price: $${randomCard.price.toFixed(2)}
        </p>
      </div>
    </div>
  `;
}

//Initial Page Load
//Runs when the page first loads
document.addEventListener("DOMContentLoaded", function () {
  //display all cards initially
  showCards(displayedCards);

  //Get input elements
  const searchInput = document.getElementById("search-input");
  const typeFilter = document.getElementById("type-filter");
  const sortSelect = document.getElementById("sort-select");

  //Add event listeners to update results smoothly
  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }
  if (typeFilter) {
    typeFilter.addEventListener("change", applyFilters);
  }
  if (sortSelect) {
    sortSelect.addEventListener("change", applyFilters);
  }
});