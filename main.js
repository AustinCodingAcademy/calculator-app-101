let current = null
let memory = null
let operation = null

const AddDigit = (num) => {
  if (current == null) {
    current = num
  } else {
    current = current + num
  }
  document.getElementById("numberDisplay").value = current
}

const setOperation = (id) => {
  memory = current
  current = null
  switch (id) {
    case "addition": operation = id
    document.getElementById("currentOperation").value = "+"
    break;
    case "subtract": operation = id
    document.getElementById("currentOperation").value = "-"
    break;
    case "multiply": operation = id
    document.getElementById("currentOperation").value = "*"
    break;
    case "divide": operation = id
    document.getElementById("currentOperation").value = "/"
    break;
    case "modulus": operation = id
    document.getElementById("currentOperation").value = "%"
    break;
  }
  document.getElementById("numberDisplay").value = ""
}

const calculate = () => {
  let result = null
  switch (operation) {
    case "addition": result = parseInt(memory) + parseInt(current)    
    break;
    case "subtract": result = parseInt(memory) - parseInt(current)    
    break;
    case "multiply": result = parseInt(memory) * parseInt(current)    
    break;
    case "divide": result = parseInt(memory) / parseInt(current)    
    break;
    case "modulus": result = parseInt(memory) % parseInt(current)    
    break;
  }
  document.getElementById("numberDisplay").value = result
  document.getElementById("currentOperation").value = "="
}

const clearOut = () => {
  document.getElementById("currentOperation").value = ""
  document.getElementById("numberDisplay").value = ""

  current = null
  memory = null
  operation = null
}