// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const btnDec = document.querySelector('button[data-action="decrement"]')
const btnInc = document.querySelector('button[data-action="increment"]')
const counterEl = document.querySelector('#value');
let counterValue = 0;
btnDec.addEventListener("click", () => {
    counterValue -= 1;
    console.log(counterValue)
    counterEl.textContent = counterValue
})
btnInc.addEventListener("click", () => {
    counterValue += 1;
    console.log(counterValue)

    counterEl.textContent = counterValue

})
console.log(btnDec.dataset.action);
console.log(btnInc.dataset.action);
console.log(counter.textContent)
