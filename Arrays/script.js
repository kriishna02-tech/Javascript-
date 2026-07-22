//Create an array of five fruits.

let arr = ["apple" ,"mango","banana" ,"lichhi" ,"guava"];
for(let f in arr){
    console.log(arr[f]);
}
console.log("---------------------------")

//Print the first and last element.
console.log("first element : " + arr[0]);
console.log("last element : " + arr[arr.length-1]);
console.log("---------------------------")

//Add an item to the end using push().
arr.push(50);
arr.push("krishna");

for(let f in arr){
    console.log(arr[f]);
}

console.log("---------------------------")
arr.pop();

for(let f in arr){
    console.log(arr[f]);
}
console.log("---------------------------")

let student={
    name:"krishna kumar",
    div: "3a4",
    rollNo : 13,
    cgpa : 8.0
}
console.log(student);
console.log(typeof(student));

console.log(student.name);
student.city = "delhi";
delete student.div;
console.log(student);

