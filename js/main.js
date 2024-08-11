import { allProdactCards } from "./data.js";

const findEl = (element, parent = document) => {
  return parent.querySelector(element);
};

////// Swiper kodi boshi ////////
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "cards",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

////// Swiper kodi tugashi ////////

const elWrap = findEl(".carts");
const Template = findEl(".temp");
const searchInp = findEl(".in_pp");
const searchBut = findEl(".b_tn");

export function renderProducts(list = allProdactCards, parent = elWrap) {
  parent.textContent = null;
  list.forEach((product) => {
    const newTemp = Template.content.cloneNode(true);
    const elImg = findEl(".img1", newTemp);
    const elLike = findEl(".img2", newTemp);
    const elTitel = findEl(".Yozuv", newTemp);
    const elHeart = findEl(".heart", newTemp);
    const elReyt = findEl(".reyt", newTemp);
    const elRasrochka = findEl(".ras", newTemp);
    const elRealPrice = findEl(".real-price", newTemp);
    const elSkitka = findEl(".skitka", newTemp);

    elLike.dataset.id = product.id;
    if (product.isLiked) {
      elLike.classList.remove("fa-regular");
      elLike.classList.add("fa-solid");
    }
    elImg.src = product.img;
    elTitel.textContent = product.title;
    elHeart.textContent = product.heart;
    elReyt.textContent = product.content;
    elRasrochka.textContent = product.rasrochka;
    elRealPrice.textContent = product.realPrice;
    elSkitka.textContent = product.discount;

    parent.appendChild(newTemp);
  });
}

renderProducts();

////////////// Search  /////////////

function searchProducts() {
  const query = searchInp.value.toLowerCase();
  const filteredProducts = allProdactCards.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
  renderProducts(filteredProducts);
}

searchInp.addEventListener("input", searchProducts);

searchBut.addEventListener("click", searchProducts);

/////////// search tugadi /////////////

elWrap.addEventListener("click", (e) => {
  if (e.target.classList.contains("img2")) {
    const id = e.target.dataset.id;
    allProdactCards.forEach((product) => {
      if (id == product.id) {
        product.isLiked = !product.isLiked;
        renderProducts();
        localStorage.setItem("prod", JSON.stringify(allProdactCards));
      }
    });
  }
});
