// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputRange = document.querySelector("#font-size-control");
const textLabel = document.querySelector("#text");


console.log(textLabel)
console.log(inputRange)

console.log(typeof (inputRange.value))
inputRange.value = Number(inputRange.getAttribute("min"));

inputRange.addEventListener("input", () => {
    textLabel.style.fontSize = `${inputRange.value}px`;
});