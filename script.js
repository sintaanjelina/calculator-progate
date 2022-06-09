const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

equalSign.addEventListener('click', () => {
    console.log("equal button is clicked");
})

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = prevNumber + currentNumber;
            break;
        case '-':
            result = prevNumber - currentNumber;
            break;
        case '*':
            result = prevNumber * currentNumber;
            break;
        case '/':
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }

}

const inputOperator = (operator) => {
    prevNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = '';

}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})
