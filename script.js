add = (a, b) => a + b;

subtract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

operate = (operator, operation) => {

};

const buttons = document.querySelector('.calc-body');
const displayScreen = document.querySelector('.calc-display');
let buttonValue;
let operatorSign;

calculation = () => {
    buttons.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) {
            if (e.target.id !== 'equals' &&
                e.target.id !== 'clear' &&
                e.target.id !== 'plus' &&
                e.target.id !== 'minus' &&
                e.target.id !== 'multiply' &&
                e.target.id !== 'divide') {
                displayScreen.innerHTML += e.target.textContent;

            }
            else if (e.target.id === 'plus' ||
                e.target.id === 'minus' ||
                e.target.id === 'multiply' ||
                e.target.id === 'divide') {
                displayScreen.innerHTML += ' ' + e.target.textContent + ' ';
            } else  {
                displayScreen.innerHTML = ' ';

            }
        }
            // buttonValue = +displayScreen.textContent;
            // return buttonValue;
         e.stopPropagation();
        // if (e.target === +) {

        // }
    });
}


calculation();




