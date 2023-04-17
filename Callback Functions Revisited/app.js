
function Holler() {
    console.log('HEY YOU!');
}

const whisper = function(){
    console.log('passt i have a secret');
}

function add(x,y){
    return x + y;
}
function multiply(x,y) {
    return x * y;
}
function subtract(x,y){
    return x - y;
}
function divide(x,y){
    return x / y;
}
function power(x,y){
    return x ** y;
}

const mathFuns = [add, subtract, multiply, divide, power];
//setTimeout(whisper, 4000);

// passing a function as argument
function doMath(a, b, mathFun){
    return mathFun(a, b);
}

// Anynomas function
doMath(3,4, function(a,b) {
    console.log(a ** b);
})
//do allMath in one function
function doAllMath(a, b, mathFuns) {
    for (let func of mathFuns){
        console.log(func(a,b));
    }
}