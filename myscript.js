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
    firstNumber += '1'
    display.textContent = firstNumber;
}

one.addEventListener('click', addingOneToDisplay)

const two = document.querySelector('#two');
function addingTwoToDisplay(){
    display.textContent = '2'
}
two.addEventListener('click', addingTwoToDisplay)