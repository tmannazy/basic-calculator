const buttons = document.querySelector('.calc-body');
const screen = document.querySelector('.calc-screen');
const leftOperandArray = [];
const rightOperandArray = [];
let leftOperand;
let rightOperand;
let operatorSign;
screen.textContent = 0;
document.addEventListener('keydown', handleKeyDown);

const add = (a, b) => roundSolution(a + b);
const subtract = (a, b) => roundSolution(a - b);
const multiply = (a, b) => roundSolution(a * b);
const divide = (a, b) => roundSolution(a / b);

const displayScreen = scr => {
    screen.textContent = scr;
};

const operate = operator => {
    switch (operator) {
        case '+':
            return add(Number(leftOperand), Number(rightOperand));
        case '-':
            return subtract(Number(leftOperand), Number(rightOperand));
        case '*':
            return multiply(Number(leftOperand), Number(rightOperand));
        case '/':
            if (Number(rightOperand) === 0) {
                return 'Infinity'
            } else {
                return divide(Number(leftOperand), Number(rightOperand));
            }
    }
};

const roundSolution = (operateSolution, decimalPlaces = 3) => {
    return Number(Math.round(operateSolution + 'e' + decimalPlaces) + 'e-' + decimalPlaces)
};

function handleKeyDown(event) {
    isOperator(event.key);
    isEquals(event.key);
    isDigits(event.key);
    isDelete(event.key);
    isDecimal(event.key);
    clearScreen(event.key);
    // isParenthesis(event.key);
};

const selectButton = e => {
    if (e.target !== e.currentTarget) {
        isOperator(e.target.value);
        isEquals(e.target.value);
        isDigits(e.target.value);
        isDelete(e.target.value);
        isDecimal(e.target.value);
        clearScreen(e.target.value);
    } e.stopPropagation();
};

const calculation = () => {
    buttons.addEventListener('click', selectButton);
};


const isOperator = e => {
    if (e === '+' || e === '-' || e === '*' || e === '/') {
        if (e === '-' && leftOperand === undefined) {
            leftOperandArray.push(e);
            leftOperand = leftOperandArray.join('');
            screen.textContent = `${leftOperand}`;
        }
        else if (!operatorSign) {
            operatorSign = e;
            screen.textContent += ` ${operatorSign} `;
        }
        else if (operatorSign) {
            if (rightOperand === 0) {
                operatorSign = e;
                screen.textContent += ` ${operatorSign} `;
            }
            else if (operatorSign !== e && typeof leftOperand === 'string' && typeof rightOperand === 'string') {
                leftOperand = operate(operatorSign);
                rightOperand = '';
                rightOperandArray.splice(0, rightOperandArray.length);
                operatorSign = e;
                screen.textContent = `${leftOperand} ${operatorSign}`;
            }
            else if (operatorSign !== e && typeof leftOperand === 'number' && rightOperand === '') {
                rightOperandArray.push(e);
                rightOperand = rightOperandArray.join('');
                screen.textContent = `${leftOperand} ${operatorSign} ${rightOperand}`;
            }
            else if (operatorSign !== e && typeof leftOperand === 'number' && rightOperand !== '') {
                rightOperand = '';
                rightOperandArray.splice(0, rightOperandArray.length);
                operatorSign = e;
                screen.textContent = `${leftOperand} ${operatorSign}`;
            }
            else if (operatorSign !== e && typeof leftOperand === 'number' && typeof rightOperand === 'string') {
                leftOperand = operate(operatorSign);
                rightOperand = '';
                rightOperandArray.splice(0, rightOperandArray.length);
                operatorSign = e;
                screen.textContent = `${leftOperand} ${operatorSign}`;
            }
            else if (operatorSign !== e && typeof rightOperand === 'string') {
                operatorSign = e;
                screen.textContent = `${leftOperand} ${operatorSign}`;
            }
            else if (operatorSign !== e) {
                rightOperandArray.push(e);
                rightOperand = rightOperandArray.join('');
                screen.textContent = `${leftOperand} ${operatorSign} ${rightOperand}`;
            }
            else if (typeof leftOperand === 'number' && typeof rightOperand === 'string' && !rightOperandArray.length) {
                rightOperand = '';
                operatorSign = e;
                screen.textContent = `${leftOperand} ${operatorSign}`;
            }
            else if (typeof leftOperand === 'number' && typeof rightOperand === 'string') {
                leftOperand = operate(operatorSign);
                rightOperand = '';
                rightOperandArray.splice(0, rightOperandArray.length);
                operatorSign = e;
                screen.textContent = `${leftOperand} ${operatorSign}`;
            }
            else if (typeof leftOperand === 'number' && typeof rightOperand !== 'string') {
                displayScreen(operate(operatorSign));
                rightOperandArray.splice(0, rightOperandArray.length);
                leftOperand = operate(operatorSign);
                rightOperand = '';
                operatorSign = e;
                screen.textContent = `${leftOperand} ${operatorSign} `;
            }
            else if (leftOperand === undefined) {
                leftOperand = 0;
                rightOperandArray.splice(0, rightOperandArray.length);
                displayScreen(operate(operatorSign));
                leftOperand = operate(operatorSign);
                rightOperand = '';
                operatorSign = e;
                screen.textContent = `${leftOperand} ${operatorSign}`;
            }
            else {
                leftOperand = operate(operatorSign);
                rightOperandArray.splice(0, rightOperandArray.length);
                operatorSign = e;
                screen.textContent = `${leftOperand} ${operatorSign} `;
                rightOperand = 0;
            }
        }
    }
};

const isEquals = equal => {
    if (equal === 'Enter' && operatorSign && leftOperand === undefined) {
        leftOperand = '0';
        displayScreen(operate(operatorSign));
        leftOperand = (operate(operatorSign));
        rightOperandArray.splice(0, rightOperandArray.length);
    }
    else if (equal === 'Enter' && operatorSign) {
        displayScreen(operate(operatorSign));
        leftOperand = (operate(operatorSign));
        rightOperandArray.splice(0, rightOperandArray.length);
    }
    else if (equal === 'Enter' && operatorSign && typeof rightOperand === 'string') {

    }
};

const isDigits = num => {
    if (num >= 0 || num <= 9) {
        if (leftOperand === undefined && num === '0') {
            leftOperandArray.push(num);
            leftOperand = leftOperandArray.join('');
            screen.textContent = ` ${leftOperand}`;
        }
        else if (leftOperand === undefined) {
            leftOperandArray.push(num);
            leftOperand = leftOperandArray.join('');
            screen.textContent += ` ${leftOperand}`;
        }
        else if (operatorSign && typeof leftOperand === 'number' && rightOperand === '') {
            rightOperandArray.push(num);
            rightOperand = rightOperandArray.join('');
            screen.textContent = `${leftOperand} ${operatorSign} ${rightOperand}`;
        }
        else if (operatorSign && typeof leftOperand === 'number' && typeof rightOperand === 'string' && !rightOperandArray.length) {
            leftOperandArray.splice(0, leftOperandArray.length);
            leftOperandArray.push(num);
            leftOperand = leftOperandArray.join('');
            rightOperand = '';
            operatorSign = '';
            screen.textContent = ` ${leftOperand}`;
        }
        else if (operatorSign && typeof leftOperand === 'number' && rightOperand !== '') {
            rightOperandArray.push(num);
            rightOperand = rightOperandArray.join('');
            screen.textContent = `${leftOperand} ${operatorSign} ${rightOperand}`;
        }
        else if (operatorSign && typeof leftOperand === 'number' && typeof rightOperand === 'string') {
            rightOperand = '';
            leftOperand = '';
            operatorSign = '';
            rightOperandArray.splice(0, rightOperandArray.length);
            leftOperandArray.splice(0, leftOperandArray.length);
            leftOperandArray.push(num);
            leftOperand = leftOperandArray.join('');
            displayScreen(leftOperand);
        }
        else if (operatorSign && typeof leftOperand === 'string' && rightOperand === '') {
            rightOperandArray.push(num);
            rightOperand = rightOperandArray.join('');
            screen.textContent = `${leftOperand} ${operatorSign} ${rightOperand}`;
        }
        else if (operatorSign && typeof leftOperand === 'string' && rightOperand === '0') {
            rightOperand = '';
            leftOperand = '';
            operatorSign = '';
            leftOperandArray.splice(0, leftOperandArray.length);
            leftOperandArray.push(num);
            leftOperand = leftOperandArray.join('');
            screen.textContent = `${leftOperand} ${operatorSign}`;
        }
        else if (!isOperator(num)) {
            if (operatorSign) {
                rightOperandArray.push(num);
                screen.textContent += num;
                rightOperand = rightOperandArray.join('');
            }
            else {
                leftOperandArray.push(num);
                leftOperand = leftOperandArray.join('');
                displayScreen(leftOperand);
            }
        }
    }
};

const isDecimal = point => {
    if (point === '.' && !leftOperand) {
        leftOperandArray.push(0);
        leftOperandArray.push(point);
        leftOperand = leftOperandArray.join('');
        displayScreen(leftOperand);
    }
    else if (point === '.' && leftOperand) {
        rightOperandArray.push(point);
        rightOperand = rightOperandArray.join('');
        screen.textContent = `${leftOperand} ${operatorSign} ${rightOperand}`;
    }
    else if (point === '.' && leftOperandArray.includes(point)) {
        if (operatorSign && !rightOperandArray.includes(point)) {
            rightOperandArray.push(point);
            rightOperand = rightOperandArray.join('');
            screen.textContent += point;
        }
        else {
            leftOperandArray;
        }
    }
    else if (point === '.' && !leftOperandArray.includes(point)) {
        leftOperandArray.push(point);
        leftOperand = leftOperandArray.join('');
        displayScreen(leftOperand);
    }
};

const isDelete = del => {
    if (del === 'Backspace') {
        if (leftOperand && !operatorSign) {
            leftOperandArray.pop();
            leftOperand = leftOperandArray.join('');
            displayScreen(leftOperand);
        }
        else if (leftOperand && !rightOperand) {
            operatorSign = '';
            screen.textContent = `${leftOperand} ${operatorSign}`;
        }
        else if (leftOperand && rightOperand) {
            rightOperandArray.pop();
            rightOperand = rightOperandArray.join('');
            screen.textContent = `${leftOperand} ${operatorSign} ${rightOperand}`;
        }
        else if (leftOperand === undefined && rightOperand) {
            rightOperandArray.pop();
            rightOperand = rightOperandArray.join('');
            screen.textContent = ` 0 ${operatorSign} ${rightOperand}`;
        }
        else if (leftOperand === undefined) {
            operatorSign = '';
            screen.textContent = 0;
        }
        else if (leftOperandArray) {
            if (operatorSign && rightOperandArray) {
                rightOperandArray.pop();
                rightOperand = rightOperandArray.join('');
                screen.textContent = `${leftOperand} ${operatorSign} ${rightOperand}`;
            }
            else if (leftOperandArray && operatorSign) {
                operatorSign = '';
                screen.textContent = `${leftOperand} ${operatorSign}`;
            }
            else if (typeof leftOperand === 'number' && typeof rightOperand === 'string') {
                leftOperandArray.splice(0, leftOperandArray.length);
                rightOperandArray.splice(0, rightOperandArray.length);
                leftOperand = 0;
                rightOperand = 0;
                operatorSign = '';
                displayScreen(0);
            }
            else {
                leftOperandArray.pop();
                leftOperand = leftOperandArray.join('');
                displayScreen(leftOperand);
            }
        }
    }
};

const clearScreen = (clear) => {
    if (clear === 'Delete') {
        leftOperandArray.splice(0, leftOperandArray.length);
        rightOperandArray.splice(0, rightOperandArray.length);
        leftOperand = 0;
        rightOperand = 0;
        operatorSign = '';
        displayScreen(0);
    }
};

// const isParenthesis = (bracket) => {
//     if (bracket === ')') {
//         rightOperandArray.push(bracket);
//         rightOperand = rightOperandArray.join('');
//         screen.textContent = `${leftOperand} ${operatorSign} ${rightOperand}`;
//     }
// };
// // let limit = entry => {
// // function limit(entry) {
// return this.filter((item, index) => {
//     if (index <= (entry - 1)) {
//         return true;
//     }
// })
// };
// Array.prototype.limit = limit;
// leftOperandArray.limit(9);
// rightOperandArray.limit(9);

calculation();




