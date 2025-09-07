let btnToggler = document.querySelector(".top-nav .top-nav-inner .btn-toggler");

let topRightNavbar = document.querySelector(
  ".top-nav .top-nav-inner ul:nth-child(2)"
);

btnToggler.onclick = function () {
  topRightNavbar.classList.toggle("makeItFlex");
};

let togglerBtns = document.querySelectorAll("[data-toggle]");
let dataBs = document.querySelectorAll("[data-bs-toggle]");

togglerBtns.forEach((btnPlus) => {
  btnPlus.onclick = function () {
    dataBs.forEach((data) => {
      if (btnPlus.dataset.toggle == data.dataset.bsToggle) {
        // data.style.display = "none";
        data.classList.toggle("appearData");
      }
    });
  };
});

const btn = document.querySelector("main #filter");
const sidebar = document.querySelector("main aside");

btn.addEventListener("click", () => {
  console.log("hello");

  sidebar.classList.toggle("active");
});

let menuBar = document.querySelector("#menu-bar");
let categoryBar = document.querySelector("#category-bar");

let products = document.querySelectorAll(
  "main .main-content .main-content-products .product"
);

menuBar.onclick = function () {
  products.forEach((product) => {
    product.classList.add("product-menu-bar");
  });
};
categoryBar.onclick = function () {
  products.forEach((product) => {
    product.classList.remove("product-menu-bar");
  });
};
