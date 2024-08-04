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

const elButChange = document.querySelector("#btn_change");
elButChange.addEventListener("click", (e) => {
  const elTit = document.getElementById("inp_1");
  const elContent = document.getElementById("inp_2");
  const elPayR = document.getElementById("inp_3");
  const elRealP = document.getElementById("inp_4");
  const elDiscount = document.getElementById("inp_5");

  const newAllProdactCards = {
    id: allProdactCards.length + 1,
    title: elTit.value,
    heart: "⭐",
    content: elContent.value,
    rasrochka: elPayR.value,
    realPrice: elRealP.value,
    discount: elDiscount.value,
    img: "./img/kungaboqar.svg",
    isLiked: false,
  };

  allProdactCards.push(newAllProdactCards);
  renderTopProdects();
});
renderTopProdects();
