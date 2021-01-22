const buttons = document.querySelector('.calc-body');
const screen = document.querySelector('.calc-display');
const leftOperand = [];
const rightOperand = [];
let operatorSign;

const add = (a, b) =>  a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator) => {
    if (operator === '+') {
        return screen = displayScreen(add(+leftOperand, +rightOperand));
    }
    else if (operator === '-') {
        return screen = displayScreen(subtract(+leftOperand, +rightOperand));
    }
    else if (operator === 'x') {
        return screen += displayScreen(multiply(+leftOperand, +rightOperand));
    }
    else {
        return screen += displayScreen(divide(+leftOperand, +rightOperand));
    }
};

const isOperator = (e) => {
    if (e === 'plus') {
        return e;
    }
    else if (e === 'minus') {
        return e;
    }
    else if (e === 'multiply') {
        return e;
    }
    else if (e === 'divide') {
        return e;
    }
};

const displayScreen = (scr) => {
    console.log(screen.innerHTML = scr);
    screen.innerHTML = scr;
}

const calculation = () => {
    buttons.addEventListener('click', selectButton);
}

const selectButton = (e) => {
    if (e.target !== e.currentTarget) {
        if (e.target.id === isOperator(e.target.id)) {
            operatorSign = e.target.textContent;
            screen.innerHTML += ' ' + operatorSign + ' ';
        }
        else if (e.target.id === 'equals') {
            if (!operatorSign){
                screen.innerHTML = 0;
            }
            else if (operatorSign) {
                operate(operatorSign);
            }
        }
        else if (e.target.id !== isOperator(e.target.id)) {
            if (operatorSign) {
                rightOperand.push(e.target.textContent);
                displayScreen(rightOperand.join(''));
            }
            else {
                leftOperand.push(e.target.textContent);
                displayScreen(leftOperand.join(''));
            }
        }

    } e.stopPropagation;
};

calculation();




