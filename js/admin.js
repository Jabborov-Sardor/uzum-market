import { allProdactCards } from "./data.js";
const findEl = (element, parent = document) => {
  return parent.querySelector(element);
};
const elWrap = findEl(".carts");
const Template = findEl(".temp");
const elButChange = findEl("#btn_change");
const elEditBtn = findEl("#save_chang");
// const formEdit = findEl("#form-edit");

const editImg = findEl("#edit-img");

renderProducts();

function renderProducts(list = allProdactCards, parent = elWrap) {
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
    const elDelete = findEl("#btn_del", newTemp);
    const elEdit = findEl("#btn_edit", newTemp);

    elLike.dataset.id = product.id;

    elEdit.dataset.id = product.id;
    elDelete.dataset.id = product.id;

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

elButChange.addEventListener("click", () => {
  const elImg = document.getElementById("inp_1");
  const elTit = document.getElementById("inp_2");
  const elContent = document.getElementById("inp_3");
  const elPayR = document.getElementById("inp_4");
  const elRealP = document.getElementById("inp_5");
  const elDiscount = document.getElementById("inp_6");

  const newAllProdactCards = {
    id: allProdactCards.length + 1,
    title: elTit.value,
    heart: "⭐",
    content: elContent.value,
    rasrochka: elPayR.value,
    realPrice: elRealP.value,
    discount: elDiscount.value + " so'm",
    img: elImg.value,
    isLiked: false,
  };

  allProdactCards.push(newAllProdactCards);

  localStorage.setItem("prod", JSON.stringify(allProdactCards));

  renderProducts();
});

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
  ///////////////// EDIT //////////////

  if (e.target.className.includes("btn_edit")) {
    const id = Number(e.target.dataset.id);

    const elEditImg = document.getElementById("m_inp_1");
    const elEditTitle = document.getElementById("m_inp_2");
    const elEditPayM = document.getElementById("m_inp_3");
    const elEditRealP = document.getElementById("m_inp_4");
    const elEditDiscount = document.getElementById("m_inp_5");

    const product = allProdactCards.filter((product) => product.id === id)[0];

    editImg.src = product.img;
    elEditImg.value = product.img;
    elEditTitle.value = product.title;
    elEditPayM.value = product.rasrochka;
    elEditRealP.value = product.realPrice;
    elEditDiscount.value = product.discount;

    elEditBtn.addEventListener("click", (e) => {
      allProdactCards.forEach((product) => {
        if (product.id === id) {
          product.title = elEditTitle.value;
          product.rasrochka = elEditPayM.value;
          product.realPrice = elEditRealP.value;
          product.discount = elEditDiscount.value;
        }
      });
      localStorage.setItem("products", JSON.stringify(product));
      renderProducts();
    });
  }
});
