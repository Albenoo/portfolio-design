
const toggle = document.querySelector(".menu");
const quotediv = document.querySelector(".quotesdiv");
const generate = document.querySelector("#cta");
const nav = document.querySelector(".navbar_links");
const newyeareve = new Date().getFullYear();
const darktoggle = document.querySelector("#toggle");
let year = document.querySelector("#year");
year.innerHTML = newyeareve;


toggle.addEventListener("click", () => {
  nav.classList.toggle("navbar-show");
  toggle.style.transition = "1s linear";
  if (toggle.innerHTML === "🍔") {
    toggle.innerHTML = "❌";
  } else {
    toggle.innerHTML = "🍔";
  }
  nav.style.transition = "1s linear";


});

window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});


darktoggle.addEventListener("click", () => {
  darktoggle.classList.toggle("fa-toggle-on");
  document.body.classList.toggle("theme-data");
  document.body.style.transition = "1s linear";
  darktoggle.body.classList.toggle("theme-data");
});
