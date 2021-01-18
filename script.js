add = (a, b) => a + b;

subtract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

operate = (operator, a, b) => {

};
const buttons = document.querySelector('.calc-body');
const displayScreen = document.querySelector('.calc-display');
let displayValue;

display = () => {
    value;
    displayValue;
}

const value = buttons.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) {
        displayValue = e.target.textContent;
        displayScreen.innerHTML = e.target.textContent;
    } e.stopPropagation();
});

// display();
console.log(displayValue);



