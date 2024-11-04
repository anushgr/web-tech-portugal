document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".auth-buttons").classList.toggle("active");
});

const cityData = {
  lisbon: {
    attractions: [
      {
        name: "Belém Tower",
        description: "16th-century fortified tower",
        price: "€6",
        image: "Images/image__1673380698.jpg",
      },
      {
        name: "Jerónimos Monastery",
        description: "UNESCO World Heritage site",
        price: "€10",
        image: "Images/Jernimos_Monastery.jpg",
      },
      {
        name: "Time Out Market",
        description: "Food market and cultural space",
        price: "Free entry",
        image:
          "Images/time-out-market-is-a-food-hall-and-major-tourist-attraction-located-in-mercado-da-ribeira-at-cais-do-sodre-in-lisbon-portugal-2PJXC6Y.jpg",
      },
    ],
    restaurants: [
      {
        name: "Time Out Market",
        description: "Various Portuguese cuisine",
        price: "€€",
        image: "/api/placeholder/300/200",
      },
      {
        name: "Cervejaria Ramiro",
        description: "Famous seafood restaurant",
        price: "€€€",
        image: "/api/placeholder/300/200",
      },
    ],
    Events: [
      {
        name: "Santos Populares",
        description: "June 12-14, 2024",
        price: "Free",
        image: "/api/placeholder/300/200",
      },
    ],
    weather: {
      temp: "22°C",
      condition: "Sunny",
    },
  },
  porto: {
    attractions: [
      {
        name: "Ribeira District",
        description: "Historic riverside district",
        price: "Free",
        image: "/api/placeholder/300/200",
      },
      {
        name: "Porto Wine Cellars",
        description: "Wine tasting and tours",
        price: "€15",
        image: "/api/placeholder/300/200",
      },
    ],
    restaurants: [
      {
        name: "Café Santiago",
        description: "Traditional Portuguese food",
        price: "€€",
        image: "/api/placeholder/300/200",
      },
    ],
    Events: [
      {
        name: "São João Festival",
        description: "June 23-24, 2024",
        price: "Free",
        image: "/api/placeholder/300/200",
      },
    ],
    weather: {
      temp: "20°C",
      condition: "Partly Cloudy",
    },
  },
};

let currentCity = "lisbon";
let currentTab = "attractions"; // Default tab

function updateContent() {
  const content = document.getElementById("mainContent");
  const data = cityData[currentCity][currentTab];

  content.innerHTML = data
    .map((item) => {
      let htmlFileName = "";

      // Handle both attractions and restaurants
      if (currentTab === "attractions") {
        if (item.name === "Belém Tower") {
          htmlFileName = "Lisbon/BelémTower.html";
        } else if (item.name === "Jerónimos Monastery") {
          htmlFileName = "Lisbon/JeronimosMonastery.html";
        } else if (item.name === "Time Out Market") {
          htmlFileName = "Lisbon/TimeOutMarket.html";
        }
      } else if (currentTab === "restaurants") {
        if (item.name === "Time Out Market") {
          htmlFileName = "Lisbon/TimeOutMarket.html";
        } else if (item.name === "Cervejaria Ramiro") {
          htmlFileName = "Lisbon/CervejariaRamiro.html";
        } else if (item.name === "Café Santiago") {
          htmlFileName = "Porto/CaféSantiago.html";
        }
      } else if (currentTab === "Events") {
        if (item.name === "Santos Populares") {
          htmlFileName = "Lisbon/SantosPopulares.html";
        } else if (item.name === "São João Festival") {
          htmlFileName = "Lisbon/SãoJoãoFestival.html";
        }
      }

      return `
            <div class="card" onclick="window.location.href='${htmlFileName}'">
                <img src="${item.image}" alt="${item.name}">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p class="price">${item.price}</p>
                </div>
            </div>
        `;
    })
    .join("");

  // Update weather
  const weatherInfo = document.getElementById("weatherInfo");
  const weather = cityData[currentCity].weather;
  weatherInfo.textContent = `${weather.temp} - ${weather.condition}`;
}

// Event Listeners
document.getElementById("citySelect").addEventListener("change", (e) => {
  currentCity = e.target.value;
  updateContent();
});

// Add tab switching functionality
document.getElementById("attractionsTab").addEventListener("click", () => {
  currentTab = "attractions";
  updateContent();
});

document.getElementById("restaurantsTab").addEventListener("click", () => {
  currentTab = "restaurants";
  updateContent();
});

document.getElementById("EventsTab").addEventListener("click", () => {
  currentTab = "Events";
  updateContent();
});

// Event Listeners
document.getElementById("citySelect").addEventListener("change", (e) => {
  currentCity = e.target.value;
  updateContent();
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", (e) => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    e.target.classList.add("active");
    currentTab = e.target.dataset.tab;
    updateContent();
  });
});

// Initial load
updateContent();
