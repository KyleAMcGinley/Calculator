function add(...args){
    let sum = 0;
    for (var i = 0; i < args.length; i++){
        sum += args[i]
    }
    return sum;
}
