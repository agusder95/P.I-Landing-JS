const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuItems = document.querySelector(".menu-items");

/* ~~~~~~~~~~~ reduce header while scroll ~~~~~~~~~~~ */
window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  if(window.scrollY > 15 ){
    setTimeout(()=>{
      header.classList.add("scrolling")
    },300)
  }else{
    setTimeout(()=>{
      header.classList.remove("scrolling")
    },300)
  }
})

/* ~~~~~~~~~~~ Menu hamburger ~~~~~~~~~~~ */

hamburgerIcon.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});

/* ~~~~~~~~~~~ Alert Dot ~~~~~~~~~~~ */

const alertDot = document.getElementById("alertDot");

const activeAlert = () => {
  const dataLS = localStorage.getItem("productsCart");
  const dataPurchase = JSON.parse(dataLS);
  if (!dataPurchase) {
    alertDot.style.display = "none";
  } else {
    alertDot.style.display = "block";
  }
};

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

const loadLStorage = (price, stock, title, img) => {
  const existDataJSON = localStorage.getItem("productsCart");
  let existData = [];
  let current = 1;
  if (existDataJSON) {
    existData = JSON.parse(existDataJSON);
  }
  if (existData.length > 0) {
    for (const index in existData) {
      if (title === existData[index].title) {
        current = existData[index].amount + 1;
        existData[index].propertyToUpdate = current;
        existData.splice(index, 1);
      }
    }
  }
  existData.push({
    precio: price,
    stock: stock,
    title: title,
    img: img,
    amount: current,
  });
  const updateData = JSON.stringify(existData);
  localStorage.setItem("productsCart", updateData);
};

/* ~~~~~~~~~~~ load cards~~~~~~~~~~~ */
const arrayCarga = (price, stock, title, img) => {
  loadLStorage(price, stock, title, img);
  activeAlert();
};

const cargaCards = (categories) => {
  if (categories === "Todos") {
    for (const categoryName in PRODUCTS) {
      PRODUCTS[categoryName].map((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <div class="imageCardWrapper">
            <img src="${item.image}" alt = "${item.title}" />
          </div>
          <h3>${item.title}</h3>
          <p>Precio: ${item.price}</p>
          
          <button  onclick="arrayCarga(${item.price}, ${item.stock}, '${item.title}', '${item.image}')">Comprar</button>
        `;
        cardsContaier.appendChild(card);
      });
    }
  } else {
    PRODUCTS[categories].map((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
          <div class="imageCardWrapper">
            <img src="${item.image}" alt = "${item.title}" />
          </div>
          <h3>${item.title}</h3>
          <p>Precio: ${item.price}</p>
          
          <button  onclick="arrayCarga(${item.price}, ${item.stock}, '${item.title}', '${item.image}')">Comprar</button>
        `;
      cardsContaier.appendChild(card);
    });
  }
};

window.addEventListener("DOMContentLoaded", () => {
  activeAlert();
  cargaButtons();
  cargaCards("Todos");
});

/* ~~~~~~~~~~~ cart ~~~~~~~~~~~ */

const carrito = document.getElementById("carritoContainer");
const carritoItems = document.getElementById("carrito-items");

carrito.addEventListener("click", () => {
  const dataLS = localStorage.getItem("productsCart");
  const dataPurchase = JSON.parse(dataLS);
  if (dataPurchase) {
    carritoItems.classList.toggle("active");
  } else {
    carritoItems.classList.remove("active");
  }
  addProductsCart();
});

/* ~~~~~~~~~~~ cartItems ~~~~~~~~~~~ */
const productsCart = document.getElementById("productsCart");

const addProductsCart = () => {
  const dataLS = localStorage.getItem("productsCart");
  const dataPurchase = JSON.parse(dataLS);
  const totalAmount = document.getElementById("totalAmount");

  if (carritoItems.classList.contains("active")) {
    var total = 0
    var totProducts= 0
    for (const id in dataPurchase) {
      total += (dataPurchase[id].precio * dataPurchase[id].amount)
      totProducts += dataPurchase[id].amount
      const list = document.createElement("li");
      list.classList.add("listProduct");
      
      list.innerHTML = `
        <div class="centerImage">
          <div class="ImgProductContainer">
            <img src="${dataPurchase[id].img}" alt = "${dataPurchase[id].title}" />
          </div>
        </div>
        <p>${dataPurchase[id].title}</p>
        <p>$${dataPurchase[id].precio}</p>
        <p>x${dataPurchase[id].amount}</p>
      `;
      productsCart.appendChild(list);
    }
    const totalCart = document.createElement('p')
    totalCart.innerHTML = `Total: $${total} | Cantidad: ${totProducts}`
    totalAmount.appendChild(totalCart);
  } else {
    while (productsCart.firstChild) {
      productsCart.removeChild(productsCart.firstChild);
    }
    while(totalAmount.firstChild){
      totalAmount.removeChild(totalAmount.firstChild);
    }
  }
};

const rmProducts = () => {
  localStorage.removeItem("productsCart");
};

const rmItemsCart = () => {
  rmProducts();
  activeAlert();
};

/* ~~~~~~~~~~~ Modal ~~~~~~~~~~~ */

const activeModal = document.getElementById("modalPurchase");
const purchaseCart = () => {
  const dataLS = localStorage.getItem("productsCart");
  const dataPurchase = JSON.parse(dataLS);
  if (dataPurchase.length > 0) {
    activeModal.classList.add("active");
    const value = document.createElement("p");
    const text = document.createElement("p");
    var total = 0;

    for (const id in dataPurchase) {
      if (dataPurchase[id].amount > dataPurchase[id].stock) {
        value.innerHTML = `
          <p>Compra ${dataPurchase[id].title} maxima ${dataPurchase[id].stock}</p>
        `;
        activeModal.appendChild(value);
        rmProducts();
        return;
      }

      total = total + (dataPurchase[id].precio * dataPurchase[id].amount);
      value.innerHTML = `Total: ${total}`;
      text.innerHTML = `Revise su mail para continuar con el pago`
      activeModal.appendChild(value);
      activeModal.appendChild(text);
    }
  }
  rmProducts();
};

/* ~~~~~~~~~~~ close Modal ~~~~~~~~~~~ */

activeModal.addEventListener("click", () => {
  activeModal.classList.remove("active");
  activeAlert();
  while (activeModal.firstChild) {
    activeModal.removeChild(activeModal.firstChild);
  }
});
