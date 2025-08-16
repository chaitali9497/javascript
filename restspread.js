//default parameters//default parameters are used to set default values for function parameters
//if the parameter is not passed, the default value will be used
//it is used to avoid errors when a parameter is not passed
//function test(a,b){
//    return a+b;
//} output NaN
//becuse of these error we can use check
//function test(a,b){
//  b = (b===undefined) ? 1:b;
//  return a+b;
//} instead of we write ---->
function test(a, b = 1) {
    return a + b;
}
const result = test(2);
const result2 = test(2, 6);
console.log(result, result2);

//spread parameters
//spread operator is used to spread the elements of an array or object
//it is used to pass multiple arguments to a function or to create a new array or object;
function multiply(a, b) {
    return a * b;

}
const array = [5, 2];
const mul = multiply(...array); ///three dots is the function of array multiply
console.log(mul);

const arr = [7, 6, 9];
const obj = { ...arr };
console.log(obj);// convert into object, output key -value pair
//spread operator is used to spread the elements of an array or object

// rest parameter (opp of spread parameter);
//rest parameter is used to collect all the remaining arguments into an array
//it is used to pass multiple arguments to a function as an array
//it is used to avoid errors when a parameter is not passed
//it is used to collect all the remaining arguments into an array
//it is used to pass multiple arguments to a function as an array
//it is used to avoid errors when a parameter is not passed
function sumofAllNumber(...args) {
    //(...args) is the rest parameter, it collects all the remaining arguments into an array
    let sum = 0;
    for (let value of args) {
        sum = value + sum;
    }
    return sum;
}
const resultOfSum = sumofAllNumber(1, 3, 4, 5, 8, 9);
console.log(resultOfSum);
