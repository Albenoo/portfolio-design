const toggle = document.querySelector(".menu");
const nav = document.querySelector(".navbar_links");
const newyeareve = new Date().getFullYear();
console.log(newyeareve);
let year = document.querySelector("#year");
console.log(year);
year.innerHTML = newyeareve;

toggle.addEventListener("click", () => {
  if (nav.style.display === "none") {
    nav.style.display = "flex";
    toggle.innerHTML = "❌";
  } else {
    nav.style.display = "none";
    toggle.innerHTML = "🍔";
  }
});
