let input = document.getElementById('input') // input/output button
let number = document.querySelectorAll('.button') // number buttons
let operator = document.querySelectorAll('.operators') // operator buttons
let result = document.getElementById('equals') // equal button
let clear = document.getElementById('clear') // clear button
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if result is not diplayed, just keep adding
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      // if result is currently displayed and user pressed an operator
      // we need to keep on adding to the string for next operation
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      // if result is currently displayed and user pressed a number
      // we need clear the input string and add the new input to start the new opration
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// adding click handlers to number buttons
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener["click"] {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      // if first key pressed is an opearator, don't do anything
      console.log("enter a number first");
    } else {
      // else just add the operator pressed to the input
      input.innerHTML += e.target.innerHTML;
    }

  };
}

// on click of 'equal' button
result.addEventListener("click", function(e) {

  // this is the string that we will be processing eg. -10+26+33-56*34/23
  var inputString = input.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  // now we are looping through the array and doing one operation at a time.
  // first divide, then multiply, then subtraction and then addition
  // as we move we are alterning the original numbers and operators array
  // the final element remaining in the array will be the output

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; // displaying the output

  resultDisplayed = true; // turning flag if result is displayed
});

// clearing the input on press of clear
clear.addEventListener("click", function() {
  input.innerHTML = "";
})
// // These variable hold the numbers we want to do operations on and the name of the operation we want to perform.
// // They are expected to change so we use the "let" keyword.
// let num1 = null
// let num2 = null
// let operation = null
// let result = null
// let input = document.getElementById('containers')

// // this function takes in the number you type in the input field and saves it to the "firstNum" variable
// const userClick = () => {
//   if num1() = null {
//     num1 = userClick() => {
//       num1.value
//     }
//   } else {
//     num2 = userClick()
//     input.value = num2
//   }
// }
// const firstNum = (num) => {
//   console.log('First Number:', num)  
// }

// // this function takes in the number you type in the 2nd input field and saves it to the "secondNum" variable
// const secondNum = (num) => {
//   // "parseInt" is a built in function in JS that converts a string/word into a number
//   num2 = console.log(num)
// }
// const userClick = () => {
//   let num2 = secondNum.value
//   if num1 {
//   }
// }
// const add = (numA, numB) => {
//   const sum = numA + numB
//   return sum
//   console.log(sum)
// }
// const subtract = (numA, numB) => {
//   const difference = numA - numB
//   return difference
//   console.log('Difference:', difference)
// }
// const multiply = (numA, numB) => {
//   const multiplication = numA * numB
//   return multiplication
//   console.log(multiplication)
// }
// const divide = (numA, numB) => {
//   const division = numA / numB
//   return division
//   console.log(divide)
// }
// const modulus = (numA, numB) => {
//   const percentage = numA % numB
//   return percentage
//   console.log(modulus)
// }


// // This function changes the "operation" variable to be equal to the "id" of the button we choose on the web page.
// const changeOperation = (chosenOperation) => {
//   operation = chosenOperation

//   console.log(operation)
// }
// const operationResults = () => document.getElementsByName('number')
  
//   console.log('Result:',changeOperation)
// // In order to show the user their results we have to access the DOM and stick in the value
// const putResultInElement = (operationResults) => {
//   // access the DOM by writing "document" then use the method "getElementById" and pass it the id, "result".
//   document.getElementById("result").innerHTML = operationResults

//   // Remember, each element has built in properties like "innerHTML" which we can change to anything we like. 
//   // Here we give it a string: "Results: " and add the value of the operation to it.
// }

// // The function uses the value of "operation" variable to determine which operation function it should use on the number: add, subtract, multiply, divide, or modulus
// const equals = () => {
//   switch (operation) {
//     case "addition":  putResultInElement(add(num1, num2)) 
//     break;
//     case "subtraction": putResultInElement(subtract(num1, num2)) 
//     break;
//     case "multiplication": multiply(num1, secondNum) 
//     break;
//     case "division": console.log(divide(num1, num2)) 
//     break;
//     case "modulus": console.log(modulus(num1, num2)) 
//     break;
//     default: "Choose an operation"
//   }
// }