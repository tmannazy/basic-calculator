add = (a, b) => a + b;

subtract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

operate = (operator) => {
    if (operator === '+') {
        add(buttonValue, buttonValueTwo);
    };
};

const buttons = document.querySelector('.calc-body');
const displayScreen = document.querySelector('.calc-display');
let buttonValue;
let buttonValueTwo;
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
                return buttonValue = +e.target.textContent;
                // return buttonValue;
            }
            else if (e.target.id === 'plus' ||
                e.target.id === 'minus' ||
                e.target.id === 'multiply' ||
                e.target.id === 'divide') {
                if (e.target.id !== 'equals' &&
                    e.target.id !== 'clear') {
                        displayScreen.innerHTML += ' ' + e.target.textContent + ' ';
                        operatorSign = e.target.textContent;
                    }
                else {
                    return buttonValueTwo = +e.target.textContent;
                    }
            }
            // else target.id !== 'plus' &&
            //     e.target.id !== 'minus' &&
            //     e.target.id !== 'multiply' &&
            //     e.target.id !== 'divide') {
            // }
            else if (e.target.id === 'equals') {
                displayScreen.innerHTML = operate(operatorSign);
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




