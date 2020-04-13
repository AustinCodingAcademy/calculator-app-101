// These variable hold the numbers we want to do operations on and the name of the operation we want to perform.
// They are expected to change so we use the "let" keyword.
let firstNum = null;
let secondNum = null;
let operation = null;

// this function takes in the number you type in the input field and saves it to the "firstNum" variable
// "parseInt" is a built in function in JS that converts a string/word into a number
const saveFirstNumber = (num) => {
  firstNum = parseInt(num);
};

const saveSecondNumber = (num) => {
  secondNum = parseInt(num);
};

const add = (numA, numB) => {
  const sum = numA + numB;
  return sum;
};

const subtract = (numA, numB) => {
  const difference = numA - numB;
  return difference;
};

const multiply = (numA, numB) => {
  const product = numA * numB;
  return product;
};

const divide = (numA, numB) => {
  const quotient = numB / numA;
  return quotient;
};

const modulus = (numA, numB) => {
  const remainder = numB % numA;
  return remainder;
};

// This function changes the "operation" variable to be equal to the "id" of the button we choose on the web page.
const changeOperation = (chosenOperation) => {
  operation = chosenOperation;
};




// In order to show the user their results we have to access the DOM and stick in the value
const putResultInElement = (operationResults) => {
  // access the DOM by writing "document" then use the method "getElementById" and pass it the id, "result".
  document.getElementById("result").innerHTML = "Results: " + operationResults;

  // Remember, each element has built in properties like "innerHTML" which we can change to anything we like.
  // Here we give it a string: "Results: " and add the value of the operation to it.
};



// The function uses the value of "operation" variable to determine which operation function it should use on the number: add, subtract, multiply, divide, or modulus
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
      "Choose an operation";
  }
};
