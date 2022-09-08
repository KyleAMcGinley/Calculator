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
const display = document.querySelector('#display');
//Will use loop function to assign event listeners to all numbers
//Click will add number onto display text content
const numbers = document.querySelectorAll('#numbers>button');

function addEventListenerNumbers(list, event, fn){
    const numbers = document.querySelectorAll('#numbers>button');
    for(var i = 0; i <= numbers.length - 1; i++){

        list[i].addEventListener(event, fn);
    };
}

function changeDisplay(){
    display.textContent = display.textContent + this.textContent;
}

addEventListenerNumbers(numbers, 'click', changeDisplay);

//Need to add event listeners to the operators
//When clicked it will save the value of the display's text content
//Will use a loop to assign the event listeners to the operators

const operators = document.querySelectorAll('#operators>button');

function addEventListenerOperators(list, event, fn){
    const operators = document.querySelectorAll('#operators>button');
    for(var i = 0; i <= operators.length - 1; i++){

        list[i].addEventListener(event, fn);
    };
}

function clearDisplay(){
    const display = document.querySelector('#display');
    return display.textContent = '';

}

var firstNumber = 0;
var sign = '';

//This function assigns all operators with click event and stores the displays's text content as x,
//stores the chosen operator, and clears the display for the new number

addEventListenerOperators(operators, 'click', () => {
    firstNumberString = display.textContent;
    firstNumber = Number(firstNumberString);
    sign = event.target.textContent
    clearDisplay();
});




//Need to make function that stores the second number into y variable
//Need to run operate function when equal sign is clicked
//Need to display the answer 
var secondNumber = 0;



const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    secondNumberString = display.textContent;
    secondNumber = Number(secondNumberString);
    return display.textContent = operate(firstNumber, sign, secondNumber);
});

//Make clear button reset values
clearButton = document.querySelector('#clear');