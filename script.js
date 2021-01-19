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
let decision = ['=', 'C'].map(item => item);

calculation = () => {
    buttons.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) {
            if (e.target.id === 'equals' || e.target.id  === 'clear') {
                displayScreen.innerHTML = '';
            }else {
                displayScreen.innerHTML = e.target.textContent;
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




