//function
//function name(arg1,arg2){
//return arg1+arg2;
//}

function num(x, y) {
    return x + y;
}
let result = num(12, 5);
let result2 = num(12, 50);
console.log("result", result);
console.log("result", result2);

function greeting() {
    let name = "chaitali";
    console.log(name);
}
greeting();

//checkNumber posetive, negetive,zero
function checkNumber(num) {
    if (num > 0) {
        console.log("Number is posetive");
    } else if (num < 0) {
        console.log("number is negetive");
    } else {
        console.log("number is zero")
    }
}
checkNumber(10);
checkNumber(-5);
checkNumber(0);
function takeNumber(num) {
    switch (num) {
        case 1:
            console.log("Number is One");
            break;
        case 2:
            console.log("Number is two");
            break;
        case 3:
            console.log("Number is three");
            break;
        default:
            console.log("Unknown number");
            break;
    }
}
takeNumber(1);
takeNumber(2);
takeNumber(3);
takeNumber(4);

//4 
let x = 5;
let rating = x > 4 ? "Good" : "Bad"; //ternary operator
console.log(rating);

let mood = 10;
if (mood % 2 === 0) {
    console.log("happy");
} else {
    console.log("sad");
} //happy

function test(a, b) {
    return a > 10 && b > 10;
}
const result1 = test(12, 5);
console.log("result", result1) //false

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        //continue; //1,2,4,5
        break;//1,2
    }
    console.log(i);
}

let temp = 25;
if (temp <= 0) {
    console.log("Freezing");
} else if (temp < 20) {
    console.log("Cold");
} else if (temp < 30) {
    console.log("Warm");
} else {
    console.log("Hot");
}
let age = 25;
let str;
if (age >= 18) {
    str = "Adult";
} else {
    str = "Minor";
}
console.log(str); //Adult

//String reverse
let str1 = "code";
let strLength = str1.length;
console.log(strLength);
let b = "";
for (let i = strLength - 1; i >= 0; i--) {
    b = b + str1.charAt(i);
}
console.log(b);


//Palindrome check
let str2 = "racecar";
let strNew = str2;
let len = strNew.length;
let b1 = "";
console.log(len);
//  for(let i = len-1; i>=0; i--){
//      b = b + strNew.charAt(i);
//  }
let i = len - 1;
while (i >= 0) {
    b1 += strNew.charAt(i);
    i--;
}

console.log(b1);
if (strNew === b1) {
    console.log("True");
} else {
    console.log("False")
}


