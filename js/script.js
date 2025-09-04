let btnToggler = document.querySelector(".top-nav .top-nav-inner .btn-toggler");

let topRightNavbar = document.querySelector(
  ".top-nav .top-nav-inner ul:nth-child(2)"
);

btnToggler.onclick = function () {
  topRightNavbar.classList.toggle("makeItFlex");
};
