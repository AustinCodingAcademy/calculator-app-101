
let firstNum = null, secondNum = null, operation = null, ex = ''

const saveFirstNumber = (num) => {
  firstNum = parseInt(num)
}

const saveSecondNumber = (num) => {
  secondNum = parseInt(num)
}

const add = (numA, numB) => {
  ex = '+'
  return numA + numB
}

const subtract = (numA, numB) => {
  ex = '-'
  return numA - numB
}

const multiply = (numA, numB) => {
  ex = '*'
  return numA * numB
}

const divide = (numA, numB) => {
  ex = '/'
  return numA / numB
}

const modulus = (numA, numB) => {
  ex = '%'
  return numA % numB
}

const changeOperation = (chosenOperation) => {
  if (firstNum != null && secondNum != null) {
    operation = chosenOperation
    equals();
  }
}

const putResultInElement = (operationResults) => {
  let e = document.getElementById("result");
  e.innerHTML = `${firstNum} ${ex} ${secondNum} = ${operationResults}`
}

const equals = () => {
  switch (operation) {
    case "addition": putResultInElement(add(firstNum, secondNum))
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

const startOver = () => {
  document.getElementById('result').innerHTML = '';
  firstNum = null, secondNum = null;
}