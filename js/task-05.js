// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

console.log(nameInput)
const DEFAULT_USER = "Anonymous";

nameInput.addEventListener('input', (e) => {
    if (e.currentTarget.value !== "") {
        nameOutput.textContent = e.currentTarget.value;
    } else {
        nameOutput.textContent = DEFAULT_USER;
    }
});