const buttons = document.querySelector('.calc-body');
const screen = document.querySelector('.calc-display');
const leftOperandArray = [];
const rightOperandArray = [];
let leftOperand;
let rightOperand;
let operatorSign;
let solveOperatorSign;
screen.textContent = 0;

const add = (a, b) =>  a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator) => {
    if (operator === '+') {
        return add(+leftOperand, +rightOperand);
    }
    else if (operator === '-') {
        return subtract(+leftOperand, +rightOperand);
    }
    else if (operator === 'x') {
        return multiply(+leftOperand, +rightOperand);
    }
    else {
        return divide(+leftOperand, +rightOperand);
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
            if (operatorSign && rightOperand) {
                solveOperatorSign = operatorSign;
                leftOperand = operate(solveOperatorSign);
                rightOperandArray.splice(0, rightOperandArray.length);
                rightOperand = 0;
            }
            else if (leftOperand && rightOperand === 0) {
                screen.textContent += ' ' + operatorSign + ' ';
                leftOperand = operate(operatorSign);
            };
            // }
        }
        else if (e.target.id === 'clear') {
            clearScreen();
        }
        else if (e.target.id === 'equals') {
            if (operatorSign) {
                displayScreen(operate(operatorSign));
            }
        }
        else if (e.target.id !== isOperator(e.target.id)) {
            // if (rightOperand && leftOperand && e.target.id === isOperator(e.target.id)){
            //     leftOperand = operate(operatorSign);
            //     rightOperandArray.splice(0, rightOperandArray.length);
            //     rightOperand = 0;
            // }
            if (operatorSign) {
                rightOperandArray.push(e.target.textContent);
                rightOperand = rightOperandArray.join('');
                screen.textContent += e.target.textContent;
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




