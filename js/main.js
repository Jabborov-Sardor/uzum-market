import allProdactCards from "./data.js";
import { findEl, renderTopProdects } from "./help.js";
export const elWrap = findEl(".cards");
export const Template = findEl(".temp");

renderTopProdects();

localStorage.setItem("like", likedArray);
console.log(localStorage.getItem("like"));

const likedArray = [];
elWrap.addEventListener("click", (e) => {
  if (e.target.classList.contains("img2")) {
    likedArray.length = 0;
    const id = e.target.dataset.id;
    allProdactCards.forEach((product) => {
      if (product.isLiked) {
        product.isLiked = !product.isLiked;
      }
      if (id == product.id) {
        likedArray.push(product);
      }
    });
  }
});
