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
function addingOneToFirstNumber(){
    firstNumber += '1';
    display.textContent = firstNumber;
}
one.addEventListener('click', addingOneToFirstNumber);

const two = document.querySelector('#two');
function addingTwoToFirstNumber(){
    firstNumber += '2';
    display.textContent = firstNumber;
}
two.addEventListener('click', addingTwoToFirstNumber);

const three = document.querySelector('#three');
function addingThreeToFirstNumber(){
    firstNumber += '3';
    display.textContent = firstNumber;
}
three.addEventListener('click', addingThreeToFirstNumber);

const four = document.querySelector('#four');
function addingFourToFirstNumber(){
    firstNumber += '4';
    display.textContent = firstNumber;
}
four.addEventListener('click', addingFourToFirstNumber);

const five = document.querySelector('#five');
function addingFiveToFirstNumber(){
    firstNumber += '5';
    display.textContent = firstNumber;
}
five.addEventListener('click', addingFiveToFirstNumber);

const six = document.querySelector('#six');
function addingSixToFirstNumber(){
    firstNumber += '6';
    display.textContent = firstNumber;
}
six.addEventListener('click', addingSixToFirstNumber);

const seven = document.querySelector('#seven');
function addingSevenToFirstNumber(){
    firstNumber += '7';
    display.textContent = firstNumber;
}
seven.addEventListener('click', addingSevenToFirstNumber);

const eight = document.querySelector('#eight');
function addingEightToFirstNumber(){
    firstNumber += '8';
    display.textContent = firstNumber;
}
eight.addEventListener('click', addingEightToFirstNumber);

const nine = document.querySelector('#nine');
function addingNineToFirstNumber(){
    firstNumber += '9';
    display.textContent = firstNumber;
}
nine.addEventListener('click', addingNineToFirstNumber);

const zero = document.querySelector('#zero');
function addingZeroToFirstNumber(){
    firstNumber += '0';
    display.textContent = firstNumber;
}
zero.addEventListener('click', addingZeroToFirstNumber);

const clear = document.querySelector('#clear');
function clearToFirstNumber(){
    firstNumber = '';
    display.textContent = firstNumber;
}
clear.addEventListener('click', clearToFirstNumber);

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

function storeMinusOperator(){
    const operator = '-';
    return console.log(operator);
}

minus.addEventListener('click', () => {
    storeFirstNumber();
    storeMinusOperator();
    clearDisplayForSecondNumber();
});

function storeTimesOperator(){
    const operator = '*';
    return console.log(operator);
}

times.addEventListener('click', () => {
    storeFirstNumber();
    storeTimesOperator();
    clearDisplayForSecondNumber();
});

function storeDividedByOperator(){
    const operator = '/';
    return console.log(operator);
}

dividedBy.addEventListener('click', () => {
    storeFirstNumber();
    storeDividedByOperator();
    clearDisplayForSecondNumber();
});








