const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");
const counter = document.querySelector("#counter");
const clickCount = document.querySelector("#click-count");

factButton.addEventListener("click", function () {
  bio.textContent = "Ta treść została zmieniona przez JavaScript.";
  factButton.textContent = "Gotowe!";
});

let count = 0;
counter.addEventListener("click", function () {
  count++;
  clickCount.textContent = `Liczba kliknięć: ${count}`;
});
