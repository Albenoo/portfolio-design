const toggle = document.querySelector(".menu");
const nav = document.querySelector(".navbar_links");
const newyeareve = new Date().getFullYear();
console.log(newyeareve);
let year = document.querySelector("#year");
console.log(year);
year.innerHTML = newyeareve;

const darktoggle = document.querySelector("#toggle");

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

console.log("Not very good");

darktoggle.addEventListener("click", () => {
  darktoggle.classList.toggle("fa-toggle-on");
  document.body.classList.toggle("theme-data");
  document.body.style.transition = "1s linear";
  darktoggle.body.classList.toggle("theme-data");
});
