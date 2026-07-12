// Print numbers from 1 to 10.
let n = prompt("enter number :");
for(let i = 1 ; i<= n ; i++){
    console.log(i);
}
let j = 1;
while(j<=n){
    console.log(j);
    j++;
}
let k =1;
do{
    console.log(k++);
}
while(k<=n);

//Print only even numbers from 1 to 20.
for(let i =1 ; i<=n ; i++){
    if(i%2==0){
        console.log(i);
    }
}

//Find the sum of numbers from 1 to 100.
let sum = 0;
num =1;
while(num <100){
    sum+=num;
}
console.log(sum);