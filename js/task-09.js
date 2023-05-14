function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


const changeColorBtn = document.querySelector(".change-color");
const backGroundColor = document.querySelector("body");
const spanColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  backGroundColor.style.backgroundColor = color;
  spanColor.textContent = color;
});
