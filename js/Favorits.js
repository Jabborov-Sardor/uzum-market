import { allProdactCards } from "./data.js";
import { renderProducts } from "./main.js";

const findEl = (element, parent = document) => {
  return parent.querySelector(element);
};
const elWrap = findEl(".carts");
const Template = findEl(".temp");
renderProducts(allProdactCards.filter((product) => product.isLiked === true));

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
