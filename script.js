const buttons = document.querySelector('.calc-body');
const screen = document.querySelector('.calc-display');
const leftOperandArray = [];
const rightOperandArray = [];
let leftOperand;
let rightOperand;
let operatorSign;
screen.textContent = 0;

const add = (a, b) =>  roundSolution(a + b);
const subtract = (a, b) => roundSolution(a - b);
const multiply = (a, b) => roundSolution(a * b);
const divide = (a, b) => roundSolution(a / b);

const displayScreen = scr => {
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

document.addEventListener('keydown', handleKeyDown);

// function handleKeyDown(event) {
//     if (isOperator(event.key)) {
//         return showCalculatorInput(event.key);
//     }
//     else if (isDigits(event.key)) {
//         return showCalculatorInput(event.key);
//     }
// }

// const calculation = () => {
//     buttons.addEventListener('click', selectButton);
// }

// const selectButton = e => {
//     if (e.target !== e.currentTarget) {
//         if (isOperator(e.target.value)) {
//             showCalculatorInput(e.target.value);
            // operatorSign = e.target.textContent;
            // screen.textContent += ' ' + operatorSign + ' ';
        // }
        //
        // else if (e.target.id === 'clear') {
        //     clearScreen();
        // }
        // else if (e.target.id === 'equals') {
        //     if (operatorSign) {
        //         displayScreen(operate(operatorSign));
        //         leftOperand = (operate(operatorSign));
        //         rightOperandArray.splice(0, rightOperandArray.length);
        //         rightOperand = 0;
        //     }
        // }
        // else if (e.target.id === 'del' && leftOperandArray) {
        //     if (operatorSign) {
        //         rightOperandArray.pop();
        //         rightOperand = rightOperandArray.join('');
        //         screen.textContent = `${leftOperand} ${operatorSign} ${rightOperand}`;
        //     } else {
        //         leftOperandArray.pop();
        //         leftOperand = leftOperandArray.join('');
        //         displayScreen(leftOperand);
        //     }
        // }
        // else if (e.target.id === 'point' && leftOperandArray.includes(e.target.textContent)) {
        //     if (operatorSign && !rightOperandArray.includes(e.target.textContent)) {
        //         rightOperandArray.push(e.target.textContent);
        //         rightOperand = rightOperandArray.join('');
        //         screen.textContent += e.target.textContent;
        //     }
        //     else {
        //         leftOperandArray;
        //     }
        // }
        //
//     } e.stopPropagation();
// };


// const isOperator = e => {
//     if (e === '+') {
//         console.log(e)
//         return e;
//     }
//     else if (e === '-') {
//         return e;
//     }
//     else if (e === 'x' || e === '*') {
//         return e;
//     }
//     else if (e === '/') {
//         return e;
//     }
// };


// const isDigits = num => {
//     if (!isOperator(num)) {
//             if (operatorSign) {
//                 rightOperandArray.push(e.target.textContent);
//                 screen.textContent += e.target.textContent;
//                 rightOperand = rightOperandArray.join('');
//             }
//             else {
//                 leftOperandArray.push(e.target.textContent);
//                 leftOperand = leftOperandArray.join('');
//                 displayScreen(leftOperand);
//             }
//         }
// }

// const isEquals = e => {

// }


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
                return 'Don\'t try that again!!!'
            } else {
                return divide(Number(leftOperand), Number(rightOperand));
            }
    }
};

const roundSolution = (operateSolution, decimalPlaces = 3) => {
    return Number(Math.round(operateSolution + 'e' + decimalPlaces) + 'e-' + decimalPlaces)
}

// const showCalculatorInput = input => {
    // if (isOperator(input) && !operatorSign) {
    //     operatorSign = input;
    //     screen.textContent += ' ' + operatorSign + ' ';
    // }
    // else if (isOperator(input) && operatorSign) {
    //         if (rightOperand === 0 && isOperator(input)) {
    //             operatorSign = input;
    //             screen.textContent += ' '+ operatorSign + ' ';
    //         }
    //         else {
    //             leftOperand = operate(operatorSign);
    //             rightOperandArray.splice(0, rightOperandArray.length);
    //             operatorSign = input;
    //             screen.textContent = `${leftOperand} ${operatorSign} `;
    //             rightOperand = 0;
    //         }
    // }
    // else if (isDigits(input)) {
    //     // if (!isOperator(input)) {
    //     if (operatorSign) {
    //         rightOperandArray.push(e.target.textContent);
    //         screen.textContent += e.target.textContent;
    //         rightOperand = rightOperandArray.join('');
    //     }
    //     else {
    //         leftOperandArray.push(e.target.textContent);
    //         leftOperand = leftOperandArray.join('');
    //         displayScreen(leftOperand);
    //     }
    // }
// }
function handleKeyDown (event) {
    if (isOperator(event.key)) {
        return showCalculatorInput(event.key);
    }
    else if (isDigits(event.key)) {
        return showCalculatorInput(event.key);
    }
    else if (isEquals(event.keyCode === 61)) {
        return showCalculatorInput(event.key);
    }
    else if (isDecimal(event.key)) {
        return showCalculatorInput(event.key);
    }
    else if (isDelete(event.key)) {
        showCalculatorInput(event.key)
    }
    else if (isClear(event.key)) {
        return showCalculatorInput(event.key);
    }
}

const calculation = () => {
    buttons.addEventListener('click', selectButton);
}

const selectButton = e => {
    if (e.target !== e.currentTarget) {
        if (isOperator(e.target.value)) {
            return showCalculatorInput(e.target.value);
        }
        else if (isDigits(e.target.value)) {
            return showCalculatorInput(e.target.value);
        }
    }
    e.stopPropagation();
};

const isOperator = e => {
    switch (e) {
        case '+':
            return e;
        case '-':
            return e;
        case '*':
            return e;
        case '/':
            return e;
    }
};

const isDigits = num => {
    if (num >= 0 || num <= 9) {
        return num;
    }
};


const isEquals = equal => {
    // if (operatorSign) {
    //     displayScreen(operate(operatorSign));
    //     leftOperand = (operate(operatorSign));
    //     rightOperandArray.splice(0, rightOperandArray.length);
    //     rightOperand = 0;
    // }
    displayScreen(equal);
};

const isDecimal = point => {
    if (leftOperandArray.includes(point)) {
        if (operatorSign && !rightOperandArray.includes(point)) {
            rightOperandArray.push(point);
            rightOperand = rightOperandArray.join('');
            screen.textContent += point;
        }
        else {
            leftOperandArray;
        }
    }
};

const isDelete = del => {
    if (leftOperandArray) {
        if (operatorSign) {
            rightOperandArray.pop();
            rightOperand = rightOperandArray.join('');
            screen.textContent = `${leftOperand} ${operatorSign} ${rightOperand}`;
        } else {
            leftOperandArray.pop();
            leftOperand = leftOperandArray.join('');
            displayScreen(leftOperand);
        }
    }
};

const isClear = clear => {
    clearScreen();
};

const showCalculatorInput = input => {
    if (isOperator(input) && !operatorSign) {
        operatorSign = input;
        screen.textContent += ' ' + operatorSign + ' ';
    }
    else if (isOperator(input) && operatorSign) {
        if (rightOperand === 0) {
            operatorSign = input;
            screen.textContent += ' ' + operatorSign + ' ';
        }
        else {
            leftOperand = operate(operatorSign);
            rightOperandArray.splice(0, rightOperandArray.length);
            operatorSign = input;
            screen.textContent = `${leftOperand} ${operatorSign} `;
            rightOperand = 0;
        }
    }
    else if (isDigits(input) && !isOperator(input)) {
        if (operatorSign) {
            rightOperandArray.push(input);
            screen.textContent += input;
            rightOperand = rightOperandArray.join('');
        }
        else {
            leftOperandArray.push(input);
            leftOperand = leftOperandArray.join('');
            displayScreen(leftOperand);
        }
    }
};



calculation();




