const add = (a, b) =>  a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (operator) => {
    if (operator === '+') {
        return add(+buttonValue.join(''), +buttonValueTwo.join(''));
    };
};

const displayScreen = (scr) => {
    screen = document.querySelector('.calc-display');
    return screen.innerHTML += scr;
}

const buttons = document.querySelector('.calc-body');
const leftOperand = [];
const rightOperand = [];
let operatorSign;

// calculation = () => {
//     buttons.addEventListener('click', (e) => {
//         if (e.target !== e.currentTarget) {
//             if (e.target.id === 'plus' ||
//                 e.target.id === 'minus' ||
//                 e.target.id === 'multiply' ||
//                 e.target.id === 'divide') {
//                 displayScreen.innerHTML += ' ' + e.target.textContent + ' ';
//                 operatorSign = e.target.textContent;
//             }
//             else if (buttonValue.length !== 0 &&
//                 e.target.id !== 'equals' &&
//                 e.target.id !== 'clear' &&
//                 e.target.id !== 'plus' &&
//                 e.target.id !== 'minus' &&
//                 e.target.id !== 'multiply' &&
//                 e.target.id !== 'divide') {
//                 displayScreen.innerHTML += e.target.textContent;
//                 buttonValueTwo.push(e.target.textContent);
//             }
//             else if (e.target.id !== 'equals' &&
//                 e.target.id !== 'clear' &&
//                 e.target.id !== 'plus' &&
//                 e.target.id !== 'minus' &&
//                 e.target.id !== 'multiply' &&
//                 e.target.id !== 'divide') {
//                 displayScreen.innerHTML += e.target.textContent;
//                 buttonValue.push(e.target.textContent);
//             }
//             else if (e.target.id === 'equals') {
//                 displayScreen.innerHTML = operate(operatorSign);
//             }
//             else if (e.target.id === 'clear') {
//                 displayScreen.innerHTML = ' ';
//                 buttonValue = buttonValueTwo = [];
//             }
//         } e.stopPropagation();
//     });
// }

const calculation = () => {
    buttons.addEventListener('click', selectButton);
}

const selectButton = (e) => {
    if (e.target !== e.currentTarget) {
        if (e.target.id === isOperator(e.target.id)) {
            operatorSign = e.target.textContent;
            displayScreen(operatorSign);
            console.log(displayScreen);
        }
        else if (e.target.id !== isOperator(e.target.id)) {
            if (leftOperand.length !== 0) {
                rightOperand.push(e.target.textContent);
            }
            else {
                leftOperand.push(e.target.textContent);
                console.log(leftOperand);
            }
        }
    }
};


const isOperator = (e) => {
    if (e === 'plus') {
        // add(leftOperand, rightOperand);
        return e;
    }
    else if (e === 'minus') {
        return e;
    }
    else if (e === 'multiply') {
        // multiply(leftOperand, rightOperand);
        return e;
    }
    else if (e === 'divide') {
        // divide(leftOperand, rightOperand);
        return e;
    }
};






calculation();
// console.log(calculation());




