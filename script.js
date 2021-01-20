add = (a, b) => a + b;

subtract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

operate = (operator) => {
    if (operator === '+') {
        return add(+buttonValue.join(''), +buttonValueTwo.join(''));
    };
};

const buttons = document.querySelector('.calc-body');
const displayScreen = document.querySelector('.calc-display');
const buttonValue = [];
let buttonValueTwo  = [];
let operatorSign;

calculation = () => {
    buttons.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) {
            if (e.target.id === 'plus' ||
                e.target.id === 'minus' ||
                e.target.id === 'multiply' ||
                e.target.id === 'divide') {
                displayScreen.innerHTML += ' ' + e.target.textContent + ' ';
                operatorSign = e.target.textContent;
            }
            else if (buttonValue.length !== 0 &&
                e.target.id !== 'equals' &&
                e.target.id !== 'clear' &&
                e.target.id !== 'plus' &&
                e.target.id !== 'minus' &&
                e.target.id !== 'multiply' &&
                e.target.id !== 'divide') {
                displayScreen.innerHTML += e.target.textContent;
                buttonValueTwo.push(e.target.textContent);
            }
            else if (e.target.id !== 'equals' &&
                e.target.id !== 'clear' &&
                e.target.id !== 'plus' &&
                e.target.id !== 'minus' &&
                e.target.id !== 'multiply' &&
                e.target.id !== 'divide') {
                displayScreen.innerHTML += e.target.textContent;
                buttonValue.push(e.target.textContent);
            }
            else if (e.target.id === 'equals') {
                displayScreen.innerHTML = operate(operatorSign);
            }
            else if (e.target.id === 'clear') {
                displayScreen.innerHTML = ' ';
                buttonValue = buttonValueTwo = [];
            }
        } e.stopPropagation();
    });
}

isOperator = (e) => {
    if (e.target.id == 'plus') {
        operatorSign = e.target.textContent;
        displayScreen += e.target.textContent;
}


}


calculation();




