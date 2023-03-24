// this is for making the header stick to the top at all time
window.onscroll = function () {
  scrollPage();
};

const header = document.querySelector(".header");

const sticky = header.offsetTop;

function scrollPage() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// function for making the hamburger menu work
function hamburgerMenu() {
  var hamburgerLinks = document.querySelector(".links");
  if (hamburgerLinks.style.display === "block") {
    hamburgerLinks.style.display = "none";
  } else {
    hamburgerLinks.style.display = "block";
  }
}
