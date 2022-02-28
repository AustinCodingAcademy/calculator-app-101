let firstNum = null
let secondNum = null
let operator = null

const saveTheFirstNumber = (num) => {
    firstNum = parseInt(num)
}

const saveTheSecondNumber = (num) => {
    secondNum = parseInt(num)
}

const add = (x, y) => {
    const sum = x + y
    console.log(x + y)
    return sum
}

const sub = (a, b) => {
    const dif = a - b
    console.log(a - b)
    return dif
}

const multiple = (bill, steve) => {
    const mul = bill * steve
    console.log(bill * steve)
    return mul
}

const div = (pancake, waffle) => {
    const quo = pancake / waffle
    console.log(pancake / waffle)
    return quo

}

const modulus = (surf, stew) => {
    const mod = surf % stew
    console.log(surf % stew)
    return mod
}

const changeOp = (picked) => {
    operator = picked
    console.log("operator")
}

const putAnswerInElement = (operatorResult) => {
    document.getElementById("results").innerHTML = "Results: " + operatorResult
}

const result = () => {
    switch (operator) {
        case "add": putAnswerInElement(add(firstNum, secondNum))
        break;
        case "subtract": putAnswerInElement(sub(firstNum, secondNum))
        break;
        case "multiply": putAnswerInElement(multiple(firstNum, secondNum))
        break;
        case "divide": putAnswerInElement(div(firstNum, secondNum))
        break;
        case "modulus": putAnswerInElement(modulus(firstNum, secondNum))
    
    }

}