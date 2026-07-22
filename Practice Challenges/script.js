let num = Number(prompt("enter number : "));
let ans = 0;

while (num > 0) {
    let rem = num % 10;
    ans = ans * 10 + rem;
    num = Math.floor(num / 10);
}

console.log(ans);


//Count vowels in a string.
let str = prompt("enter string :");
let count = 0;
for(let i=0 ; i<str.length ;i++ ){
    if(str[i]=='a' || str[i]=='A' || str[i]=='i' ||str[i]=='I' || str[i]=='u' || str[i]=='U' || str[i]=='o'||str[i]=='O' ||str[i]=='e' ||str[i]=='E' ){
        count++;
    }
}
console.log(count);


// Palindrome Number
let num = 121;
let original = num;
let reverse = 0;

while (num > 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
}

if (original === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}