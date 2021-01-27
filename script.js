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
        return add(Number(leftOperand), Number(rightOperand));
    }
    else if (operator === '-') {
        return subtract(Number(leftOperand), Number(rightOperand));
    }
    else if (operator === 'x') {
        return multiply(Number(leftOperand), Number(rightOperand));
    }
    else {
        if (Number(rightOperand) === 0) {
            return 'Don\'t try that again!!!'
        } else {
            return divide(Number(leftOperand), Number(rightOperand));
        }
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
        if (e.target.id === isOperator(e.target.id) && !operatorSign) {
            operatorSign = e.target.textContent;
            screen.textContent += ' ' + operatorSign + ' ';
        }
        else if (e.target.id === isOperator(e.target.id) && operatorSign) {
            leftOperand = operate(operatorSign);
            rightOperandArray.splice(0, rightOperandArray.length);
            operatorSign = e.target.textContent;
            screen.textContent = `${leftOperand} ${operatorSign} `;
            rightOperand = 0;
        }
        else if (e.target.id === 'clear') {
            clearScreen();
        }
        else if (e.target.id === 'equals') {
            if (operatorSign) {
                displayScreen(operate(operatorSign));
                leftOperand = (operate(operatorSign));
                rightOperandArray.splice(0, rightOperandArray.length);
                rightOperand = 0;
            }
        }
        else if (e.target.id !== isOperator(e.target.id)) {
            if (operatorSign) {
                rightOperandArray.push(e.target.textContent);
                screen.textContent += e.target.textContent;
                rightOperand = rightOperandArray.join('');
            }
            else {
                    leftOperandArray.push(e.target.textContent);
                    leftOperand = leftOperandArray.join('');
                    displayScreen(leftOperand);
            }
        }
        else if (e.target.id === 'point') {
            if (leftOperandArray.includes(e.target.textContent)) {
                leftOperandArray.pop();
            }
            else if (rightOperandArray.includes(e.target.textContent)) {
                rightOperandArray.pop();
            }
        }
    } e.stopPropagation();
};

calculation();




