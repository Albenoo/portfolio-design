const quotes = [
  "9. “If opportunity doesn’t knock, build a door",
  "Strive not to be a success, but rather to be of value",
  " Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference",
  " Do not let what you cannot do interfere with what you can do",
  " Whenever you find yourself on the side of the majority, it is time to pause and reflect",
  " I haven’t failed. I’ve just found 10,000 ways that won’t wor"
];
const toggle = document.querySelector(".menu");
const quotediv = document.querySelector(".quotesdiv");
const generate = document.querySelector("#cta");
const nav = document.querySelector(".navbar_links");
const newyeareve = new Date().getFullYear();
console.log(newyeareve);
let year = document.querySelector("#year");
console.log(year);
year.innerHTML = newyeareve;
Updatequote = () => {
  let randomquote = quotes[Math.floor(Math.random(-1) * quotes.length)];
  quotediv.textContent = randomquote;
};
Updatequote();

setInterval(Updatequote, 5000);

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

  if (toggle) {
    console.log("You successfully open navbar");
  } else {
    console.log("Try Again!");
  }
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
