const header = document.getElementsByTagName("header")[0];
const desktopMenu = document.getElementById("desktop");
const ppal = document.getElementById("ppal");
const imgCarrito = document.getElementById("imgCarrito");
const main = document.getElementById("main");
const imgLogo = document.getElementById("imgLogo");

const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuItems = document.querySelector(".menu-items");

/* ~~~~~~~~~~~ reduce header while scroll ~~~~~~~~~~~ */

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const headerHighlight = header.offsetHeight;

  if (scrollPosition > headerHighlight) {
    header.style.padding = "0";
    desktop.style.padding = "1px 0";
    ppal.style.height = "3rem";
    imgCarrito.style.height = "1.5rem";
    imgLogo.style.height = "100%";
    menuItems.style.top = "40px";
  } else {
    header.style.padding = "0 0 2rem";
    desktop.style.padding = "2rem 0 0";
    ppal.style.height = "6.5rem";
    imgCarrito.style.height = "2rem";
    imgLogo.style.height = "auto";
    menuItems.style.top = "100px";
  }
});

/* ~~~~~~~~~~~ Menu hamburger ~~~~~~~~~~~ */

hamburgerIcon.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});

/* ~~~~~~~~~~~ Products ~~~~~~~~~~~ */
const productsContainer = document.getElementById("categories");
const cardsContaier = document.getElementById("cardsContaier");

const changeCategory = (name) => {
  while (cardsContaier.firstChild) {
    cardsContaier.removeChild(cardsContaier.firstChild);
  }
  cargaCards(name);
};

const cargaButtons = () => {
  const categories = Object.keys(PRODUCTS);

  categories.forEach((item) => {
    const categories = document.createElement("button");
    categories.onclick = () => changeCategory(item);

    categories.innerHTML = `
      ${item}
    `;
    productsContainer.appendChild(categories);
  });
};
const cargaCards = (categories) => {
  if (categories === "all") {
    for (const name in PRODUCTS) {
      PRODUCTS[name].map((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <h3>${item.title}</h3>
          <p>Precio: ${item.price}</p>
        `;
        cardsContaier.appendChild(card);
      });
    }
  } else {
    PRODUCTS[categories].map((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>Precio: ${item.price}</p>
      `;
      cardsContaier.appendChild(card);
    });
  }
};

window.addEventListener("DOMContentLoaded", cargaButtons);
window.addEventListener("DOMContentLoaded", () => cargaCards("all"));

/* ~~~~~~~~~~~ Products ~~~~~~~~~~~ */