let firstNum = null
let secondNum = null
let operation = null
let display = document.getElementById("input")

const saveFirstNumber = (num) => {
    firstNum = parseInt(num)  
    console.log(firstNum)
}

const saveSecondNumber = (num) => {
    secondNum = parseInt(num)
    console.log(secondNum)
}

const insert = (element) => {
    console.log("element",element)
    console.log("element",element.value)
    display.value += element.value
    console.log("first num" ,firstNum)
}
  
const add = (numA, numB) => {
      const sum = numA + numB
      return sum
}

const multiply = (numA, numB) => {
    const multiply = numA * numB
    return multiply
    console.log(numA, numB)
}

const clearfunc = () => {
    firstNum = null
    secondNum = null
    operation = null
    display.value = null
}

const divide = (numA, numB) => {
    const divide = numA / numB
    return divide
}

const subtract = (numA, numB) => {
    const difference = numA - numB
    return difference
}

const modulus = (numA, numB) => {
    const modulus = numA / numB
    return modulus
}
  
const changeOperation = (element) => {
    console.log(element)
    operation = element.name
    if(firstNum == null) {
        saveFirstNumber(display.value)
        return display.value = null
    }
}

const putResultInDisplay = (operationResults) => {
    display.value = operationResults
}

const equalsFunc = () => {
    saveSecondNumber(display.value)
    console.log(operation, secondNum)
    display.value = null
    switch (operation) {
      case "addition":  putResultInDisplay(add(firstNum, secondNum)) 
      break;
      case "subtraction": putResultInDisplay(subtract(firstNum, secondNum)) 
      break;
      case "multiplication": putResultInDisplay(multiply(firstNum, secondNum))
      break;
      case "division": putResultInDisplay(divide(firstNum, secondNum)) 
      break;
      case "modulus": putResultInDisplay(modulus(firstNum, secondNum)) 
      break;
      default: "Choose an operation"
    }
}