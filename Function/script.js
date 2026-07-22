// Write a function that returns the square of a number.

function square(x){
    return x*x;
}
console.log(square(5));

//Write a function that adds two numbers.
function add(a , b){
    return a+b;
}
let a = Number(prompt("Enter a"))
let b = Number(prompt("Enter b"))
console.log(add(a,b));

//Write a function that returns the larger of two numbers.
function comp(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log(comp(a,b));
