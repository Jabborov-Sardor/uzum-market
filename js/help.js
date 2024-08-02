import prodactCards from "./data.js";
import { elWrapper, elTemplate } from "./main.js";

const findEl = (element, parent = document) => {
  return parent.querySelector(element);
};
function renderProdects(list = prodactCards, parent = elWrapper) {
  parent.textContent = null;
  list.forEach((product) => {
    const newTemp = elTemplate.content.cloneNode(true);
    const elImg = findEl(".img1", newTemp);
    const elLike = findEl(".img2", newTemp);
    const elTitel = findEl(".p", newTemp);
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
    elImg.src = product.img1;
    elTitel.textContent = product.title;
    elHeart.textContent = product.heart;
    elReyt.textContent = product.content;
    elRasrochka.textContent = product.rasrochka;
    elRealPrice.textContent = product.realPrice;
    elSkitka.textContent = product.skidka;

    parent.appendChild(newTemp);
  });
}

export { findEl, renderProdects };
