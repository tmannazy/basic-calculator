const buttons = document.querySelector('.calc-body');
const screen = document.querySelector('.calc-display');
const leftOperandArray = [];
const rightOperandArray = [];
let leftOperand;
let rightOperand;
let operatorSign;
screen.textContent = 0;

const add = (a, b) =>  a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator) => {
    if (operator === '+') {
        return displayScreen(add(+leftOperand, +rightOperand));
    }
    else if (operator === '-') {
        return displayScreen(subtract(+leftOperand, +rightOperand));
    }
    else if (operator === 'x') {
        return displayScreen(multiply(+leftOperand, +rightOperand));
    }
    else {
        return displayScreen(divide(+leftOperand, +rightOperand));
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
    console.log({ leftOperandArray, rightOperandArray });
    screen.textContent = scr;
}

const clearScreen = () => {
    leftOperandArray.splice(0, leftOperandArray.length);
    rightOperandArray.splice(0, rightOperandArray.length);
    leftOperand = 0;
    rightOperand = 0;
    operatorSign = '';
    displayScreen(0);
}
const calculation = () => {
    buttons.addEventListener('click', selectButton);
}

const selectButton = (e) => {
    if (e.target !== e.currentTarget) {
        if (e.target.id === isOperator(e.target.id)) {
            operatorSign = e.target.textContent;
            screen.textContent += ' ' + operatorSign + ' ';
            if (leftOperand && rightOperand) {
                operate(operatorSign);
            }
        }
        else if (e.target.id === 'clear') {
            clearScreen();
        }
        else if (e.target.id === 'equals') {
            if (!operatorSign) {
                screen.textContent = 0;
            }
            else if (operatorSign) {
                operate(operatorSign);
            }
        }
        else if (e.target.id !== isOperator(e.target.id)) {
            if (operatorSign) {
                rightOperandArray.push(e.target.textContent);
                rightOperand = rightOperandArray.join('');
                displayScreen(leftOperand) + displayScreen(rightOperand);
            }
            else {
                leftOperandArray.push(e.target.textContent);
                leftOperand = leftOperandArray.join('');
                displayScreen(leftOperand);
            }
        }

    }
    e.stopPropagation();
};

calculation();




