// WAP to implement a switch statement
let dayNumber = new Date().getDay();
//let dayNumber1 = 7;
console.log("day number =  ", dayNumber);
let day;
let msg;

switch (dayNumber) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        msg = "please provide a valid number"
}

if (msg) {
    console.log("message", msg);
} else {
    console.log("Day of the week ", day);
};



