//for loop
//for loop
//for(let i =1; i<=100; i++){
 //   console.log(i)
//}
//for in loop
const user = {
    Andy:54, 
    Alex:20,
    Abby:78
    
}; //associative array

for(key in user){
    console.log(key); 
    console.log(user[key]);
}
//for of loop
let fruits = ["Mango", "Apple", "Guava"];

for(let fruit of fruits){
    console.log(fruits);
    console.log(fruit);
}

//While (condition)
let value = 1;
while (value<=10){
    console.log(value);
    value++
}
//do while loop
//do{excute the code}
let num =1;
do{
    console.log(num);
    num++
}while(num<5);