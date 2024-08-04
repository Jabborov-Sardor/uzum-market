import allProdactCards from "./data.js";
import { elWrap, Template } from "./main.js";

const findEl = (element, parent = document) => {
  return parent.querySelector(element);
};
function renderTopProdects(list = allProdactCards, parent = elWrap) {
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

export { findEl, renderTopProdects };
