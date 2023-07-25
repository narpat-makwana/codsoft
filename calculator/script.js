// script.js

let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let result = 0;

function handleNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function handleOperator(op) {
    operator = op;
    result = Number(currentInput);
    currentInput = '';
}

function calculate() {
    let secondOperand = Number(currentInput);
    switch (operator) {
        case '+':
            result += secondOperand;
            break;
        case '-':
            result -= secondOperand;
            break;
        case '*':
            result *= secondOperand;
            break;
        case '/':
            result /= secondOperand;
            break;
    }
    display.value = result;
    currentInput = '';
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
    result = 0;
}

