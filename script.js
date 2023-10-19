let card = document.querySelector(".card");
let card_2 = document.querySelector(".card_2");
let button = document.getElementById("submit");
let button_2 = document.getElementById("submit_2");
let necha = document.getElementById("necha");
const raqam = document.querySelectorAll(".raqam");

button.addEventListener("click", () => {
  card_2.classList.remove("och");
  card.style.display = "none";
});

button_2.addEventListener("click", () => {
  card_2.classList.add("och");
  card.style.display = "block";
});

raqam.forEach((a) => {
  a.addEventListener("click", () => {
    necha.innerHTML = a.innerHTML;
  });
});