add = (a, b) => a + b;

subtract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

operate = (operator, a, b) => {

};

const buttons = document.querySelector('.calc-body');
const displayScreen = document.querySelector('.calc-display');
let buttonValue;

const value = buttons.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) {
        displayScreen.innerHTML = e.target.textContent;
        buttonValue = +displayScreen.textContent;
        return buttonValue;
    } e.stopPropagation();
});




