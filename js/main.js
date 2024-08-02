import { findEl, renderProdects } from "./help.js";
export const elWrapper = findEl(".cards");
export const elTemplate = findEl(".temp");

renderProdects();

const likedArray = [];
elWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("img2")) {
    likedArray.length = 0;
    const id = e.target.dataset.id;
    prodactCards.forEach((product) => {
      if (product.isLiked) {
        product.isLiked = !product.isLiked;
      }
      if (id == product.isLiked) {
        likedArray.push(product);
      }
    });
  }
});
const json = JSON.stringify(likedArray);
localStorage.setItem("like", json);
console.log(localStorage.getItem("like"));
