//x= 10;
//function foo(){
//   console.log(x);
//    const x = 5;
//}
//foo();

//x =5;
//function outer (){
//let x = 20;
//function inner (){
//  console.log(x);

// }
//  inner();
//}
//outer();


function increment() {

    counter += 1
}
let counter = 0;
increment();
increment();
increment();
console.log(counter);

function foo() {
    var x = 56;
    console.log(x);
    console.log(y);
    function bar() {
        var y = 30;
        console.log(x);
    }
    bar();
};
foo();
var x = 10;
function outer() {
    var y = 5;
    function inner() {
        var z = 2;
        console.log(x + y + z);
    }
    inner();

}
outer();

//Write a JavaScript function demonstrateScope that:

//Defines a global variable a and sets it to 1.
//Defines a function outerFunction that:
//Defines a variable b and sets it to 2.
//Defines a nested function innerFunction that:
//Defines a variable c and sets it to 3.
//Logs the values of a, b, and c.
//Calls innerFunction inside outerFunction.
//Calls outerFunction in the global scope.
function outerFunction() {
        var b = 2;
        function innerFunction(){
            var c = 3;
            console.log( "value ",a,b,c);
        }
    
    // Call innerFunction
    innerFunction()
}
var a = 1;
// Call outerFunction
outerFunction();


//Write a JavaScript function createCounter that:
//Returns a new function counter.
//The counter function, when called, increments an internal count variable by 1 and logs the current count.
//The count variable should be private and only accessible through the counter function.
//Additionally, create another function createAdder that:
//Takes a number x as an argument.
//Returns a new function that takes another number y and returns the sum of x and y.
 
function createCounter() {
    // Initialize count variable
    var count = 0;

    // Return a function that increments and logs the count
   return function incrementCount (){
        count ++;
        console.log (count);
    }
}

function createAdder(x) {
    return function counters(y){
                 return x+y;
    } 
    // Return a function that adds x to its argument y and returns the sum
}

// Create a counter and call it multiple times
const counter1 = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// Create an adder and use it to add another number
const add5 = createAdder(5);
console.log(add5(3)); // 8
console.log(add5(10)); // 15


function demo(){
    if(true){
        var x = 10;
    }
    console.log(x);
}
demo();

function outerfunc(x){
    return function innerfunc (y){
        console.log(x+y);
    }
}
var myinnerfunc =outerfunc(5);
myinnerfunc(3);


//Write a JavaScript function manageNumbers(numbers) that takes an array of numbers (numbers) as input and performs the following tasks:

//Convert to String: Convert the array of numbers into a comma-separated string using toString().
//Join Strings: Join all elements in the array into a single string separated by a hyphen - using join().

function manageNumbers(numbers) {
	// write your code here
    let stringS = numbers.toString();
    console.log(stringS);
    console.log(numbers.join("-"));
}

const numbers = [1, 2, 3, 4, 5];
manageNumbers(numbers);

//Write a JavaScript function manageTasks(tasks) that takes a one-dimensional array (tasks) as input and performs the following tasks:

//Add Task: Add a new task to the end of the list using push().
//Remove Task: Remove the last task from the list using pop().
//Complete Task: Complete the first task in the list using shift().
//Add Priority Task: Add a high-priority task to the beginning of the list using unshift().
//Display Tasks: Display all tasks in the list after each operation.

function manageTasks(tasks) {
	// write your code here
	tasks[0]="Apple";
	tasks[1]="Mango";
	tasks.push("Guava");
	console.log("After using push method" , tasks);
	tasks.pop();
	console.log("After using pop method" ,tasks);
	tasks.shift();
	console.log("After using shift method" ,tasks);
	tasks.unshift("1");
	console.log("After using unshift method" , tasks);
	

}
const tasks = [];
manageTasks(tasks);

//Write a JavaScript function manageShoppingCart(cart) that takes an array of arrays (representing items in the cart) as input and performs the following tasks:

//Add Item: Add a new item to the cart.
//Remove Item: Remove an item from the cart at index 1 using splice().
//Slice Cart: Create a sliced copy of the cart using slice() and log the sliced cart.
function manageShoppingCart(cart) {
	// write your code here
	
	    cart.push("New Item");
	    console.log("Cart After Adding Item ->" , cart);
	
	       cart.splice(0,1);
	       console.log("Cart After removing oneItem from 0 index ->" , cart);

	       const b = cart.slice(1);
	       console.log("New copy After Slice ->", b);
	       console.log("original Cart->" , cart);
}
const cart = ["Mouse", "Monitor"];
manageShoppingCart(cart);

//Write a JavaScript function analyzeInventory(section1, section2) that takes two nested arrays of items (section1 and section2) as input and performs the following tasks:

//Combine Sections: Combine the inventories of both sections into a single inventory list.
//Flatten Inventory: Flatten the combined inventory to get a single-level array of all items.
//Find Index: Find the index of a specific item (e.g., 'widget') in the flattened inventory.
//Check Availability: Check if a specific item (e.g., 'gadget') is included in the flattened inventory.

function analyzeInventory(section1, section2) {
	// write your code here
    const combineSection = section1.concat(section2);
    console.log ("combineSections ->" , combineSection);
    
    const flattenedArray = combineSection.flat();
    console.log("flattenedArray ->" , flattenedArray);
    const findindexofWidget =flattenedArray.indexOf("widget");
    console.log("findindexofWidget ->" , findindexofWidget);
    const availability = flattenedArray.includes("gadget")
    console.log("Availability og gadget ->",availability )
    return {
        combineSections,
        flattenedArray,
        findIndexOfWidget,
        availability
    };
}
const section1 = [['hammer', 'nail'], ['screwdriver', 'widget']];
const section2 = [['gadget', 'saw'], ['drill', 'bolt']];
analyzeInventory(section1, section2);



//Write a JavaScript function processArray(arr) that takes an array of numbers as input and performs the following tasks:

//Use sort() to sort the array in ascending order.
//Use reverse() to reverse the sorted array.
//Use Math.max() to find the maximum value in the array.
//Use Math.min() to find the minimum value in the array.
//Use the concept of creating a sorted copy of the array (tosorted()).

function processArray(arr) {
	// write your code here
	const arraySort = arr.sort();
	console.log ("Sort the Array ->", arraySort);
	const arrayReverse = arraySort.reverse();
	console.log("reverse the Sorted Array", arrayReverse );
	console.log(Math.min(3, 1, 4, 1, 5, 9, 2, 6, 5));
	console.log(Math.max(3, 1, 4, 1, 5, 9, 2, 6, 5));
	const Tosorted = arrayReverse.toSorted();
	console.log(Tosorted);
 	
}
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
processArray(arr);

//Implement the printArrayElements function that takes an array as input. Use the following loops to perform specific tasks:

//1. Using for-of : Print each element of the array.

//2. Using for-in : Print each element of the array along with its index.

//3. Using basic for : Compute and print the sum of all elements in the array

function printArrayElements(array) {
	// write your code here
	for(let number of numbers1){
	    console.log(number);
	}
	for(let x in numbers1){
	    console.log(x);
	}
	let sum =0;
	for(let i = 0 ; i<numbers1.length; i++){
	   sum += numbers1[i];
	   
	}
	 console.log(sum);

}
const numbers1 = [1, 2, 3, 4, 5];
printArrayElements(numbers1); 

//higher order function example
//Create a higher-order function named addFiveToAll that takes an array and element is increased by 5. Then, create another function that takes the addFiveToAll function as its first argument and prints the array

//Input: arr = [1, 2, 3, 4, 5]

//Output : [6, 7, 8, 9, 10]

function addFiveToArray(array) {
	// write your code here
	let result = [];
	for(let i = 0; i < array.length ; i++){
	result.push(array[i] + 5);
	}
	return result;
	
}
function printNumbers(transformFunction, array) {
	// write your code here
	 const transform = transformFunction(array);
    console.log(transform);
  
	
}
const numbers2 = [1, 2, 3, 4, 5];
printNumbers(addFiveToArray, numbers2);



//Given an array names, create a new array nameLengths using the map method where each element in nameLengths is the length of the corresponding string in names.

//Input: names = ['Alice', 'Bob', 'Charlie', 'David']

//Output: [5, 3, 7, 5]


    function getNameLengths(names) {
	// write your code here
	const nameLength = names.map(name => name.length);
	console.log(nameLength);
	   
}
const names = ['Alice', 'Bob', 'Charlie', 'David'];
getNameLengths(names);

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
//Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Output: [2, 4, 6, 8, 10]

function filterEvenNumbers(numbers4) { 
	// write your code here
	const evennumArray = numbers4.filter(number => number % 2 ==0 );
	console.log(evennumArray)

}
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filterEvenNumbers(numbers4);



//Implement a function named sumOfSquares that calculates the sum of squares of all elements in an array using reduce method.

//Input : arr = [1,2,3,4]

//Output : 30

//Explaination :

//1*1 + 2*2 + 3*3 + 4*4 = 30
function sumOfSquares(arr) {
    // Square each number and sum them up
    const result = arr.reduce((sum, num) => sum + num ** 2, 0);
    return result;
}

console.log(sumOfSquares([1, 2, 3, 4])); 
//Output: 30

//Given an array numbers, filter out even numbers, square each remaining number, and then calculate the sum of all squared numbers using map, filter, and reduce methods.

//Input: arr = [1, 2, 3, 4, 5, 6]

//Output: 56

//Explaination:2^2 + 4^2 + 6^2  = 56
function sumOfSquaredEvens(numbers3) {
  const totalSum = numbers3
    .filter(number => number % 2 === 0)   
    .map(number => number ** 2)           
    .reduce((sum, num) => sum + num, 0);  
  return totalSum;
}

const numbers3 = [1, 2, 3, 4, 5, 6];
console.log(sumOfSquaredEvens(numbers3)); 
//Output: 56


//Write a function called isAllPositive that checks if all elements in an array are positive numbers Using every method. It should return true if all elements are positive; otherwise, it should return false.

//Input : arr = [1,2,3,4]

//Output : true

function isAllPositive(arr) {
	// write your code here
	const allPosetive = arr.every(num => num > 0);
	
     console.log(allPosetive);

}
isAllPositive([1, 2, 3, 4]);


//Create a function named findNegative that finds the first negative number in an array using Array find(). 
// If negative number exists, it should print -1 else print all the elements of the array.

function findNegative(arr) {
	// write your code here
     return arr.find(num => num < 0);
}
const Array = [1, 2, 3, 4, -5];
console.log(findNegative(Array));


function greet(name){
    return " hello " + name + "!";
}
const result = greet();
console.log(result);






const numbers6 =[1,2,3,4,5];
const [first, second, ...rest] = numbers6;
console.log(first, second,rest);
 
 