function add(...args){
    let sum = 0;
    for (var i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}

function subtract(...args){
    var difference = args[0];
    for (var i = 1; i < args.length; i++){
        difference -= args[i];
    }
    return difference;
}

function multiply(...args){
    let product = 1;
    for (var i = 0; i < args.length; i++){
        product *= args[i];
    }
    return product;
}

function divide(...args){
    let dividend = args[0];
    for (var i = 1; i < args.length; i++){
        dividend /= args[i];
    }
    return dividend;
}

function operate(x, operator, y){
    if(operator == '+'){
        return add(x, y);
    } else if(operator == '-'){
        return subtract(x, y);
    } else if(operator == '*'){
        return multiply(x, y);
    } else if(operator == '/'){
        return divide(x, y);
    }
}
//Need to display the numbers that are clicked into the display div
//Clicking a number button changes the text content of display
//Need to determine how to string together multiple numbers
const display = document.querySelector('#display');
var firstNumber = '';

const one = document.querySelector('#one');
function addingOneToDisplay(){
    firstNumber += '1';
    display.textContent = firstNumber;
}
one.addEventListener('click', addingOneToDisplay);

const two = document.querySelector('#two');
function addingTwoToDisplay(){
    firstNumber += '2';
    display.textContent = firstNumber;
}
two.addEventListener('click', addingTwoToDisplay);

const three = document.querySelector('#three');
function addingThreeToDisplay(){
    firstNumber += '3';
    display.textContent = firstNumber;
}
three.addEventListener('click', addingThreeToDisplay);

const four = document.querySelector('#four');
function addingFourToDisplay(){
    firstNumber += '4';
    display.textContent = firstNumber;
}
four.addEventListener('click', addingFourToDisplay);

const five = document.querySelector('#five');
function addingFiveToDisplay(){
    firstNumber += '5';
    display.textContent = firstNumber;
}
five.addEventListener('click', addingFiveToDisplay);

const six = document.querySelector('#six');
function addingSixToDisplay(){
    firstNumber += '6';
    display.textContent = firstNumber;
}
six.addEventListener('click', addingSixToDisplay);

const seven = document.querySelector('#seven');
function addingSevenToDisplay(){
    firstNumber += '7';
    display.textContent = firstNumber;
}
seven.addEventListener('click', addingSevenToDisplay);

const eight = document.querySelector('#eight');
function addingEightToDisplay(){
    firstNumber += '8';
    display.textContent = firstNumber;
}
eight.addEventListener('click', addingEightToDisplay);

const nine = document.querySelector('#nine');
function addingNineToDisplay(){
    firstNumber += '9';
    display.textContent = firstNumber;
}
nine.addEventListener('click', addingNineToDisplay);

const zero = document.querySelector('#zero');
function addingZeroToDisplay(){
    firstNumber += '0';
    display.textContent = firstNumber;
}
zero.addEventListener('click', addingZeroToDisplay);

const clear = document.querySelector('#clear');
function clearingDisplay(){
    firstNumber = '';
    display.textContent = firstNumber;
}
clear.addEventListener('click', clearingDisplay);

//By now the firstNumber is entered into display
//Need to store the new first number when an operator key is pressed
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const dividedBy = document.querySelector('#divided-by');

var secondNumber = '';

function storeFirstNumber(){
   const newFirstNumber = document.querySelector('#display').textContent
   return console.log(newFirstNumber);
}
function storePlusOperator(){
    const operator = '+';
    return console.log(operator);
}
function clearDisplayForSecondNumber(){
    display.textContent = secondNumber;
}

plus.addEventListener('click', () => {
    storeFirstNumber();
    storePlusOperator();
    clearDisplayForSecondNumber();
});

plus.addEventListener('click', () => {
    storeFirstNumber();
    storePlusOperator();
    clearDisplayForSecondNumber();
});








