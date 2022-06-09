const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const inputNumber = (number) => {
    currentNumber = number;
}

numbers.forEach((number) => {
    console.log(number);
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(event.target.value);
    })
})
