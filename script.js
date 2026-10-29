const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");
const counter = document.querySelector("#counter");
const clickCount = document.querySelector("#click-count");
const buyButton = document.querySelector("#buy");

factButton.addEventListener("click", function () {
  bio.textContent = "Ta treść została zmieniona przez JavaScript.";
  factButton.textContent = "Gotowe!";
});

let count = 0;
let multiplier = 1;
counter.addEventListener("click", function () {
  count+=1*multiplier;
  clickCount.textContent = `Liczba kliknięć: ${count}`;
});

buyButton.addEventListener("click", function () {
    if (count >= 10*multiplier) {
        count -= 10*multiplier;
        multiplier++;
        clickCount.textContent = `Liczba kliknięć: ${count*multiplier}`;
        document.querySelector("#multiplier-count").textContent = `mnożnik: x${multiplier}`;
        document.querySelector("#cost").textContent = `koszt następnego mnożnika: ${10*multiplier}`;
    }
});