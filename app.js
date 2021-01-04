const toggle = document.querySelector(".menu");
const nav = document.querySelector(".navbar_links");
const main = document.querySelector(".about");
toggle.addEventListener("click", () => {
  if (nav.style.display === "none") {
    nav.style.display = "flex";
    toggle.innerHTML = "❌";
  } else {
    nav.style.display = "none";
    toggle.innerHTML = "🍔";
  }
});
