function add(num1, num2) {
    return (num1+num2);
}

function subtract(num1, num2) {
    return (num1-num2);
}

function multiply(num1, num2) {
    return (num1*num2);
}

function divide(num1, num2) {
    return (num1/num2);
}

function operate(operator, num1, num2) {
    if (operator == '+') {
        return (add(num1, num2));
    } else if (operator == '-') {
        return (subtract(num1, num2));
    } else if (operator == 'x') {
        return (multiply(num1, num2));
    } else if (operator == '/') {
        if (num2 === 0) {
            return "No dividing by 0!";
        } else {
            return (divide(num1, num2));
        }
    } else {
        return ("Invalid operator");
    }
}

let runningNum = 0;
let runningNum2 = 0;

//Functions below are for each number. The if statement is set up for the second number, while the
//else statement encompasses the code for the first number.

function oneFunction() {
    if (calcInfo.operatorDone === true) {
        runningNum2 = (runningNum2*10)+1;
        document.getElementById("display").innerHTML = runningNum2;
        calcInfo.secondNumDone = true;
    } else {
        runningNum = (runningNum*10)+1;
        document.getElementById("display").innerHTML = runningNum;
        calcInfo.firstNumDone = true;
    }
}
function twoFunction() {
    if (calcInfo.operatorDone === true) {
        runningNum2 = (runningNum2*10)+2;
        document.getElementById("display").innerHTML = runningNum2;
        calcInfo.secondNumDone = true;
    } else {
        runningNum = (runningNum*10)+2;
        document.getElementById("display").innerHTML = runningNum;
        calcInfo.firstNumDone = true;
    }
}
function threeFunction() {
    if (calcInfo.operatorDone === true) {
        runningNum2 = (runningNum2*10)+3;
        document.getElementById("display").innerHTML = runningNum2;
        calcInfo.secondNumDone = true;
    } else {
        runningNum = (runningNum*10)+3;
        document.getElementById("display").innerHTML = runningNum;
        calcInfo.firstNumDone = true;
    }
}
function fourFunction() {
    if (calcInfo.operatorDone === true) {
        runningNum2 = (runningNum2*10)+4;
        document.getElementById("display").innerHTML = runningNum2;
        calcInfo.secondNumDone = true;
    } else {
        runningNum = (runningNum*10)+4;
        document.getElementById("display").innerHTML = runningNum;
        calcInfo.firstNumDone = true;
    }
}
function fiveFunction() {
    if (calcInfo.operatorDone === true) {
        runningNum2 = (runningNum2*10)+5;
        document.getElementById("display").innerHTML = runningNum2;
        calcInfo.secondNumDone = true;
    } else {
        runningNum = (runningNum*10)+5;
        document.getElementById("display").innerHTML = runningNum;
        calcInfo.firstNumDone = true;
    }
}
function sixFunction() {
    if (calcInfo.operatorDone === true) {
        runningNum2 = (runningNum2*10)+6;
        document.getElementById("display").innerHTML = runningNum2;
        calcInfo.secondNumDone = true;
    } else {
        runningNum = (runningNum*10)+6;
        document.getElementById("display").innerHTML = runningNum;
        calcInfo.firstNumDone = true;
    }
}
function sevenFunction() {
    if (calcInfo.operatorDone === true) {
        runningNum2 = (runningNum2*10)+7;
        document.getElementById("display").innerHTML = runningNum2;
        calcInfo.secondNumDone = true;
    } else {
        runningNum = (runningNum*10)+7;
        document.getElementById("display").innerHTML = runningNum;
        calcInfo.firstNumDone = true;
    }
}
function eightFunction() {
    if (calcInfo.operatorDone === true) {
        runningNum2 = (runningNum2*10)+8;
        document.getElementById("display").innerHTML = runningNum2;
        calcInfo.secondNumDone = true;
    } else {
        runningNum = (runningNum*10)+8;
        document.getElementById("display").innerHTML = runningNum;
        calcInfo.firstNumDone = true;
    }
}
function nineFunction() {
    if (calcInfo.operatorDone === true) {
        runningNum2 = (runningNum2*10)+9;
        document.getElementById("display").innerHTML = runningNum2;
        calcInfo.secondNumDone = true;
    } else {
        runningNum = (runningNum*10)+9;
        document.getElementById("display").innerHTML = runningNum;
        calcInfo.firstNumDone = true;
    }
}
function zeroFunction() {
    if (calcInfo.operatorDone === true) {
        runningNum2 = (runningNum2*10);
        document.getElementById("display").innerHTML = runningNum2;
        calcInfo.secondNumDone = true;
    } else {
        runningNum = (runningNum*10);
        document.getElementById("display").innerHTML = runningNum;
        calcInfo.firstNumDone = true;
    }
}

//Functions below are for the operators

function divisionFunction() {
    if (calcInfo.secondNumDone === true) {
        equalFunction();
        calcInfo.operatorDone = true;
        calcInfo.operatorSaved = "/";
    } else if (calcInfo.firstNumDone === true && calcInfo.operatorDone === false) {
        calcInfo.operatorSaved = '/';
        document.getElementById("display").innerHTML = calcInfo.operatorSaved;
        calcInfo.operatorDone = true;
    } else if (calcInfo.firstNumDone === true && calcInfo.operatorDone === true) {
        document.getElementById("display").innerHTML = "Operator already entered";
    } else if (calcInfo.firstNumDone === false) {
        document.getElementById("display").innerHTML = "Enter number first";
    } else {
        document.getElementById("display").innerHTML = "Connor something is wrong";
    }
}
function multiplyFunction() {
    if (calcInfo.secondNumDone === true) {
        equalFunction();
        calcInfo.operatorDone = true;
        calcInfo.operatorSaved = "x";
    } else if (calcInfo.firstNumDone === true && calcInfo.operatorDone === false) {
        calcInfo.operatorSaved = 'x'
        document.getElementById("display").innerHTML = calcInfo.operatorSaved;
        calcInfo.operatorDone = true;
    } else if (calcInfo.firstNumDone === true && calcInfo.operatorDone === true) {
        document.getElementById("display").innerHTML = "Operator already entered";
    } else if (calcInfo.firstNumDone === false) {
        document.getElementById("display").innerHTML = "Enter number first";
    } else {
        document.getElementById("display").innerHTML = "Connor something is wrong";
    }
}
function plusFunction() {
    if (calcInfo.secondNumDone === true) {
        equalFunction();
        calcInfo.operatorDone = true;
        calcInfo.operatorSaved = "+";
    } else if (calcInfo.firstNumDone === true && calcInfo.operatorDone === false) {
        calcInfo.operatorSaved = '+'
        document.getElementById("display").innerHTML = calcInfo.operatorSaved;
        calcInfo.operatorDone = true;
    } else if (calcInfo.firstNumDone === true && calcInfo.operatorDone === true) {
        document.getElementById("display").innerHTML = "Operator already entered";
    } else if (calcInfo.firstNumDone === false) {
        document.getElementById("display").innerHTML = "Enter number first";
    } else {
        document.getElementById("display").innerHTML = "Connor something is wrong";
    }
}
function minusFunction() {
    if (calcInfo.secondNumDone === true) {
        equalFunction();
        calcInfo.operatorDone = true;
        calcInfo.operatorSaved = "-";
    } else if (calcInfo.firstNumDone === true && calcInfo.operatorDone === false) {
        calcInfo.operatorSaved = '-'
        document.getElementById("display").innerHTML = calcInfo.operatorSaved;
        calcInfo.operatorDone = true;
    } else if (calcInfo.firstNumDone === true && calcInfo.operatorDone === true) {
        document.getElementById("display").innerHTML = "Operator already entered";
    } else if (calcInfo.firstNumDone === false) {
        document.getElementById("display").innerHTML = "Enter number first";
    } else {
        document.getElementById("display").innerHTML = "Connor something is wrong";
    }
}

function clearFunction() {
    calcInfo.firstNum=0;
    calcInfo.secondNum=0;
    calcInfo.operatorSaved='';
    calcInfo.firstNumDone=false;
    calcInfo.secondNumDone=false;
    calcInfo.operatorDone=false;
    runningNum = 0;
    runningNum2 = 0;
    document.getElementById("display").innerHTML = "Clear";
}

function equalFunction() {
    calcInfo.total=operate(calcInfo.operatorSaved,runningNum,runningNum2)
    document.getElementById("display").innerHTML=calcInfo.total;
    runningNum=calcInfo.total;
    calcInfo.secondNumDone=false;
    calcInfo.secondNum=0;
    calcInfo.operatorDone=false;
    calcInfo.operatorSaved=""; 
    runningNum2=0;
}

const oneButton = document.querySelector("#oneButton");
const twoButton = document.querySelector("#twoButton");
const threeButton = document.querySelector("#threeButton");
const fourButton = document.querySelector("#fourButton");
const fiveButton = document.querySelector("#fiveButton");
const sixButton = document.querySelector("#sixButton");
const sevenButton = document.querySelector("#sevenButton");
const eightButton = document.querySelector("#eightButton");
const nineButton = document.querySelector("#nineButton");
const zeroButton = document.querySelector("#zeroButton");

const divisionButton = document.querySelector("#divisionButton");
const multiplyButton = document.querySelector("#multiplyButton");
const plusButton = document.querySelector("#plusButton");
const minusButton = document.querySelector("#minusButton");

const equalButton = document.querySelector("#equalButton");
const decimalButton = document.querySelector("#decimalButton")

const clearButton = document.querySelector("#oneButton");

const calcInfo = {
    firstNum:0,
    secondNum:0,
    total:0,
    operatorSaved:"",
    firstNumDone:false,
    secondNumDone:false,
    operatorDone:false,
}

/*
console.log("calcInfo firstNum is " + calcInfo.firstNum + " and runningNum is "+runningNum);
console.log("calcInfo secondNum is " + calcInfo.secondNum + " and runningNum2 is "+runningNum2);
console.log("calcInfo total is " + calcInfo.total + " and operatorSaved is " + calcInfo.operatorSaved);
*/