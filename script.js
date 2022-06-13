const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const calculatorHistory = document.querySelector(".calculator-history");
const percentageBtn = document.querySelector(".percentage");
const clearOneBtn = document.querySelector(".one-clear");

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let calculationHistory = '';
let percentNumber = '';

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    // calculationHistory = '';
    currentNumber = '0';
}

const clearOne = () => {
    if (!isNaN(currentNumber)) {
        currentNumber = currentNumber.toString().slice(0, -1);
        if (currentNumber == "") {
            currentNumber = '0';
        }
    } else if (!isNaN(prevNumber)) {
        currentNumber = prevNumber;
        prevNumber = "";
        currentNumber = currentNumber.toString().slice(0, -1);
    }
}

const percent = (number) => {
    currentNumber = parseFloat(number) / 100;
}

const calculate = () => {
    console.log("before calculate prev", prevNumber, "current", currentNumber, calculationOperator);
    let result = '';
    if (isNaN(parseFloat(prevNumber)) || isNaN(parseFloat(currentNumber))) {
        currentNumber = prevNumber + currentNumber;
        prevNumber = "";
        calculationOperator = "";
        return;
    }

    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            console.log(result);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = "";
    prevNumber = "";
}

const inputOperator = (operator) => {
    console.log("input prev", parseFloat(prevNumber), "current", parseFloat(currentNumber), calculationOperator);

    if (calculationOperator == "") {
        prevNumber = currentNumber;
    }
    if (!isNaN(parseFloat(prevNumber)) && !isNaN(parseFloat(currentNumber)) && calculationOperator !== "") {
        console.log("before input operator prev", parseFloat(prevNumber), "current", parseFloat(currentNumber), calculationOperator, (isNaN(parseFloat(prevNumber)) || isNaN(parseFloat(currentNumber))) && calculationOperator !== "");
        calculate();
        prevNumber = currentNumber;
        console.log("after input operator prev", parseFloat(prevNumber), "current", parseFloat(currentNumber), calculationOperator, (isNaN(parseFloat(prevNumber)) || isNaN(parseFloat(currentNumber))) && calculationOperator !== "");
    }
    calculationOperator = operator;
    console.log("input operator check prev", prevNumber, "current", currentNumber, calculationOperator);
    currentNumber = "";
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        // updateHistory(event.target.value);
        inputOperator(event.target.value);
    })
})

const updateScreen = (number) => {
    if (isNaN(number)) {
        calculatorScreen.value = "error";
    }
    calculatorScreen.value = number;
}

const updateHistory = (number) => {
    calculationHistory += number;
    if (calculationHistory === "") {
        calculatorHistory.value = number;
    }
    else {
        calculatorHistory.value = calculationHistory;
    }
}

const inputNumber = (number) => {
    if (currentNumber === '0' || parseFloat(currentNumber) === 0 || currentNumber == "Infinity") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        // console.log(currentNumber)
        updateScreen(currentNumber);
    })
})

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
    // updateHistory(currentNumber);
    clearAll();
})

equalSign.addEventListener('click', (event) => {
    calculate();
    console.log(currentNumber);
    updateScreen(currentNumber);
    // updateHistory(` = ${currentNumber}`);
})

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
    // updateHistory(currentNumber);
})

percentageBtn.addEventListener('click', () => {
    percent(currentNumber);
    updateScreen(currentNumber);
})

clearOneBtn.addEventListener('click', () => {
    clearOne();
    updateScreen(currentNumber);
})