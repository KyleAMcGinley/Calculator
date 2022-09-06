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