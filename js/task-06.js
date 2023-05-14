// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");
const inputLength = Number(input.getAttribute("data-length"));

function validation(event) {
    if (event.currentTarget.value.length !== inputLength) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }

    if (event.currentTarget.value.length === 0) {
        input.classList.remove("valid");
        input.classList.remove("invalid");
    }
}

input.addEventListener("blur", validation);