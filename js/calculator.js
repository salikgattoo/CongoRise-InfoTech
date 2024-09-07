const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let currentNumber = '';
let previousNumber = '';
let operation = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '=') {
      evaluateExpression();
    } else if (button.textContent === 'C') {
      clearDisplay();
    } else if (button.textContent === '±') {
      toggleSign();
    } else if (isNaN(parseInt(button.textContent))) {
      handleOperation(button.textContent);
    } else {
      handleDigit(button.textContent);
    }
  });
});

function handleDigit(digit) {
  currentNumber += digit;
  display.textContent = currentNumber;
}

function handleOperation(operation) {
  previousNumber = currentNumber;
  currentNumber = '';
  this.operation = operation;
}

function evaluateExpression() {
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  
  let result = null;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      break;
  }

  display.textContent = result.toString();
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
}

function toggleSign() {
  
}