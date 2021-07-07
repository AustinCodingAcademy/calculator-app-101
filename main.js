// These variable hold the numbers we want to do operations on and the name of the operation we want to perform.
// They are expected to change so we use the "let" keyword.
let firstNum = null
let secondNum = null
let operation = null

const saveFirstNumber = (num) => {
  // converts value from form (1st input field) into an integer and saves to fistNum variable
  firstNum = parseInt(num)  
}

// this function takes in the number you type in the 2nd input field and saves it to the "secondNum" variable
const saveSecondNumber = (num) => {
  // "parseInt" is a built in function in JS that converts a string/word into a number
  secondNum = parseInt(num)
}

// this function takes in two argument/numbers and returns the sum of them
const add = (numA, numB) => {
  const sum = numA + numB
  return sum
}

// this function takes in two argument/numbers and returns the difference of them
const subtract = (numA, numB) => {
  const difference = numA - numB
  return difference
}

// These variables are already defined but that don't point to functions. It's up to you to build the functions to complete your calculator use:

const multiply = (numA, numB) => {
  const product = numA * numB
  return product
}

const divide = (numA, numB) => {
  const quotient = numA / numB
  return quotient
}

const modulus = (numA, numB) => {
  const mod = numA % numB
  return mod
}

// This function changes the "operation" variable to be equal to the "id" of the button we choose on the web page.
//Stores button selection in a paramater(placeholder) called 'chosenOperation'
const changeOperation = (chosenOperation) => {
  operation = chosenOperation
  console.log(operation)//shows operation selected in console for debugging
}

//getting the result using a function above and below
const putResultInElement = (operationResults) => {
  // access the DOM by writing "document" then use the method "getElementById" and pass it the id, "result".
  document.getElementById("result").innerHTML = "Results: " + operationResults
  console.log(operationResults)//checking results in console
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
