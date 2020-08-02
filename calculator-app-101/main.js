let firstNum = null
let secondNum = null
let operation = null

const saveFirstNumber = (num) => {
  firstNum = parseInt(num)  
}

const saveSecondNumber = (num) => {
  secondNum = parseInt(num)
}

const add = (numA, numB) => {
  const sum = numA + numB
  return sum
}

const subtract = (numA, numB) => {
  const difference = numA - numB
  return difference
}

const multiply = (numA, numB) => {
  const difference = numA * numB
  return difference
  console.log(numA * numB)
}

const divide = (numA, numB) => {
  const difference = numA / numB
  return difference
  console.log(numA / numB)
}

const modulus = (numA, numB) => {
  const difference = numA % numB
  return difference
  console.log(numA % numB)
}

const changeOperation = (chosenOperation) => {
  operation = chosenOperation
  console.log(operation)
}

// In order to show the user their results we have to access the DOM and stick in the value
const putResultInElement = (operationResults) => {
  // access the DOM by writing "document" then use the method "getElementById" and pass it the id, "result".
  document.getElementById("result").innerHTML = "Results: " + operationResults

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
