const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

numbers.forEach((number) => {
    console.log(number);
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value);
    })
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

