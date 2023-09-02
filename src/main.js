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

/* ~~~~~~~~~~~ Alert Dot ~~~~~~~~~~~ */

const alertDot = document.getElementById("alertDot");

const activeAlert = () =>{
  if(arreglo.length === 0){
    alertDot.style.display="none"
  }else{
    alertDot.style.display="block"
  }
  /* arreglo.length === 0 ? alertDot.style.display="none" : "block"; */
}

/* ~~~~~~~~~~~ Products & Buttons categories ~~~~~~~~~~~ */
const productsContainer = document.getElementById("categories");
const cardsContaier = document.getElementById("cardsContaier");

const changeCategory = (name) => {
  while (cardsContaier.firstChild) {
    cardsContaier.removeChild(cardsContaier.firstChild);
  }
  cargaCards(name);
};

/* ~~~~~~~~~~~ load category buttons~~~~~~~~~~~ */

const cargaButtons = () => {
  const categories = Object.keys(PRODUCTS);

  categories.forEach((item) => {
    const categories = document.createElement("button");
    categories.textContent = `${item}`;
    item === "Todos"
      ? (categories.className = "categoriesButton selected")
      : (categories.className = "categoriesButton");

    productsContainer.appendChild(categories);
    categories.addEventListener("click", () => {
      changeCategory(item);
      const buttons = document.querySelectorAll(".categoriesButton");
      buttons.forEach((btn) => btn.classList.remove("selected"));
      categories.classList.add("selected");
    });
  });
};

const arreglo = [];

/* ~~~~~~~~~~~ load category cards~~~~~~~~~~~ */
const arrayCarga = (price, stock) => {
  arreglo.push({ precio: price, stock: stock });
  activeAlert()
};

const cargaCards = (categories) => {
  if (categories === "Todos") {
    for (const categoryName in PRODUCTS) {
      PRODUCTS[categoryName].map((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <h3>${item.title}</h3>
          <p>Precio: ${item.price}</p>
          
          <button onclick={arrayCarga(${item.price},${item.stock})}>Comprar</button>
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

window.addEventListener("DOMContentLoaded", () => {
  cargaButtons();
  cargaCards("Todos");
});

/* ~~~~~~~~~~~ cart ~~~~~~~~~~~ */

const carrito = document.getElementById("carritoContainer");
const carritoItems = document.getElementById("carrito-items");

carrito.addEventListener("click", () => {
  carritoItems.classList.toggle("active");
  addProductsCart();
});

/* ~~~~~~~~~~~ cartItems ~~~~~~~~~~~ */

/* Crear un boton de "agregar al carrito" en cada tarjeta. guardar elementos seleccionados en un arreglo de objetos. mostrar la informacion de ese arreglo en "productsCart". actualizar dom al desplegar la cortina */
const productsCart = document.getElementById("productsCart");

const addProductsCart = () => {
  if (carritoItems.classList.contains("active")) {
    for (const id in arreglo) {
      const list = document.createElement("li");
      list.classList.add("listProduct");
      list.innerHTML = `
            <p>Value:${arreglo[id].precio}</p>
            <p>Stock:${arreglo[id].stock}</p>
          `;
      productsCart.appendChild(list);
      console.log(`ac ${arreglo}`);
    }
  } else {
    while (productsCart.firstChild) {
      productsCart.removeChild(productsCart.firstChild);
    }
    
  }
};



const rmItemsCart = () => {
  arreglo.length = 0;
  activeAlert()
};

/* ~~~~~~~~~~~ Modal ~~~~~~~~~~~ */

const activeModal = document.getElementById("modalPurchase");
const purchaseCart = () => {
  if (arreglo.length > 0) {
    activeModal.classList.add("active");
    const value = document.createElement("p");
    var total = 0;

    for (const id in arreglo) {
      total = total + arreglo[id].precio;
    }
    value.innerHTML = `
      <p>Total de su compra: ${total}</p>
    `;
    activeModal.appendChild(value);
  }
  arreglo.length = 0
};

/* ~~~~~~~~~~~ close Modal ~~~~~~~~~~~ */

activeModal.addEventListener("click", () => {
  activeModal.classList.remove("active");
  activeAlert()
  while (activeModal.firstChild) {
    activeModal.removeChild(activeModal.firstChild);
  }
})

