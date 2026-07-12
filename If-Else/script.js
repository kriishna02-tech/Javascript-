//Check if a number is even or odd.
var num = Number(prompt("enter any number :"));

if(num%2==0){
    console.log(num + " is even number.");
}
else{
     console.log(num + " is odd number.");
}

//Check if a person is eligible to vote (age ≥ 18).
let age = Number(prompt("Enter age :"));
if(age>=18){
    console.log("Eligible for vote")
}
else{
    console.log("Not-eligible for vote");
}

// /Find the largest of 3 numbers..
let num1 = Number(prompt("Enter num1 :"));
let num2 = Number(prompt("Enter num2 :"));
let num3 = Number(prompt("Enter num3 :"));

if(num1>num2){
    if(num1>num3){
        console.log(num1 + " is largest");
    }
    else{
        console.log(num3 + " is largest");
    }
}
else{
    if(num2>num3){
        console.log(num2 + " is largest");
    }
    else{
        console.log(num3 + " is largest");
    }
}

//Check whether a number is positive, negative, or zero.
let num4 = prompt("enter number:");
if(num4>0){
    console.log(num4 + " is positive.");
}
else if(num4<0){
    console.log(num4 + " is positive.");
}
else{
    console.log(num4 + " is zero.");
}