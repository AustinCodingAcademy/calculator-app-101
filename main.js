// These variable hold the numbers we want to do operations on and the name of the operation we want to perform.
// They are expected to change so we use the "let" keyword.
let firstNum = null
let secondNum = null
let operation = null

// this function takes in the number you type in the input field and saves it to the "firstNum" variable
const saveFirstNumber = (num) => {
  firstNum = parseInt(num)  
  console.log(firstNum);
}

// this function takes in the number you type in the 2nd input field and saves it to the "secondNum" variable
const saveSecondNumber = (num) => {
  // "parseInt" is a built in function in JS that converts a string/word into a number
  secondNum = parseInt(num)
}

// this function takes in two argument/numbers and returns the sum of them
const add = (numA, numB) => {
  const sum = numA + numB
  console.log('values:', numA, numB)
  console.log('sum:', sum)
  return sum
}

// this function takes in two argument/numbers and returns the difference of them
const subtract = (numA, numB) => {
  const difference = numA - numB
  console.log('values:', numA, numB)
  console.log('sum:', difference)
  return difference
}

// These variables are already defined but that don't point to functions. It's up to you to build the functions to complete your calculator use:
// * to get a product then return it
const multiply = (numA, numB) => {
  // Open up the inspector tool in Chrome and select the Console tab to see what this functions is "logging out" to the console.
  const result = numA * numB
  console.log('values:', numA, numB)
  console.log('sum:', result)
  return result
}

// / to get a quotient
const divide = (numA, numB) => {
  const result = numA / numB
  console.log('values:', numA, numB)
  console.log('sum:', result)
  return result
}

// and % to get a remainder.
const modulus = (numA, numB) => {
  const result = numA % numB
  console.log('values:', numA, numB)
  console.log('sum:', result)
  return result
}

const resetCalculator = () => {
  document.getElementById("result").innerHTML = 0;
}

// This function changes the "operation" variable to be equal to the "id" of the button we choose on the web page.
const changeOperation = (chosenOperation) => {
  operation = chosenOperation
  // Use your Chrome Inspector Tool > Console Tab to see the "operation" that's logged
  console.log(operation)
}

// In order to show the user their results we have to access the DOM and stick in the value
const putResultInElement = (operationResults) => {
  // access the DOM by writing "document" then use the method "getElementById" and pass it the id, "result".
  document.getElementById("result").innerHTML = operationResults

  // Remember, each element has built in properties like "innerHTML" which we can change to anything we like. 
  // Here we give it a string: "Results: " and add the value of the operation to it.
}

// The function uses the value of "operation" variable to determine which operation function it should use on the number: add, subtract, multiply, divide, or modulus
const equals = () => {
  switch (operation) {
    case "addition":  putResultInElement(add(firstNum, secondNum)) 
    break;
    case "subtraction": putResultInElement(subtract(firstNum, secondNum)) 
    break;
    case "multiplication": putResultInElement(multiply(firstNum, secondNum)) 
    break;
    case "division": putResultInElement(divide(firstNum, secondNum)) 
    break;
    case "modulus": putResultInElement(modulus(firstNum, secondNum)) 
    break;
    default: "Choose an operation"
  }
}


//*******************************
// let total = 0;
// let displayResult = document.getElementById('displayResult');
// let enteredNum = 0;
// let numEntry = 1;

// displayResult.innerHTML = total;

// const saveInput = (num) => {
//   enteredNum += num;
//   displayResult.innerHTML = enteredNum;
//   setNum();
// }

// const setNum = () => {
//   while(enteredNum.charAt(0) === '0') {
//     enteredNum = enteredNum.substring(1);
//   }
//   if(numEntry === 1) {
//     firstNum = parseInt(enteredNum);
//     numEntry = 2;
//   } else {
//     secondNum = parseInt(enteredNum);
//     numEntry = 1;
//   }
  
//   console.log('enteredNum', enteredNum);
//   console.log('firstNum', firstNum);
//   console.log('secondNum', secondNum);
// }

// const setDisplayResult = (operationResults) => {
//   displayResult.innerHTML = operationResults;
// }

// const setEquals = () => {
//   switch (operation) {
//     case "addition":  setDisplayResult(add(firstNum, secondNum)) 
//     break;
//     case "subtraction": setDisplayResult(subtract(firstNum, secondNum)) 
//     break;
//     case "multiplication": setDisplayResult(multiply(firstNum, secondNum)) 
//     break;
//     case "division": setDisplayResult(divide(firstNum, secondNum)) 
//     break;
//     case "modulus": setDisplayResult(modulus(firstNum, secondNum)) 
//     break;
//     default: "Choose an operation"
//   }
// }
