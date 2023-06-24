// These variables hold the numbers we want to perform operations on and the name of the operation we want to perform.
// They are expected to change, so we use the "let" keyword.
let firstNum = null;
let secondNum = null;
let operation = null;

// This function takes in the number you type in the input field and saves it to the "firstNum" variable
const saveFirstNumber = (num) => {
  firstNum = parseInt(num);
};

// This function takes in the number you type in the 2nd input field and saves it to the "secondNum" variable
const saveSecondNumber = (num) => {
  secondNum = parseInt(num);
};

// This function takes in two arguments/numbers and returns the sum of them
const add = (numA, numB) => {
  const sum = numA + numB;
  return sum;
};

// This function takes in two arguments/numbers and returns the difference of them
const subtract = (numA, numB) => {
  const difference = numA - numB;
  return difference;
};

// This function takes in two arguments/numbers and returns their product
const multiply = (numA, numB) => {
  const product = numA * numB;
  return product;
};

// This function takes in two arguments/numbers and returns the quotient
const divide = (numA, numB) => {
  const quotient = numA / numB;
  return quotient;
};

// This function takes in two arguments/numbers and returns the remainder
const modulus = (numA, numB) => {
  const remainder = numA % numB;
  return remainder;
};

// This function changes the "operation" variable to be equal to the "id" of the button we choose on the web page
const changeOperation = (chosenOperation) => {
  operation = chosenOperation;
};

// In order to show the user their results, we have to access the DOM and insert the value
const putResultInElement = (operationResults) => {
  document.getElementById("result").innerHTML = "Results: " + operationResults;
};

// The function uses the value of the "operation" variable to determine which operation function it should use on the numbers: add, subtract, multiply, divide, or modulus
const equals = () => {
  switch (operation) {
    case "addition":
      putResultInElement(add(firstNum, secondNum));
      break;
    case "subtraction":
      putResultInElement(subtract(firstNum, secondNum));
      break;
    case "multiplication":
      putResultInElement(multiply(firstNum, secondNum));
      break;
    case "division":
      putResultInElement(divide(firstNum, secondNum));
      break;
    case "modulus":
      putResultInElement(modulus(firstNum, secondNum));
      break;
    default:
      putResultInElement("Choose an operation");
      break;
  }
};
