//var a = function (){
//}  ////annonymous function(a function  without a name only in function expression);

var a = function abc () {
    console.log("this is named function");
    abc(); //only called inside the function whre it is defined
    
} // a annonymonous function with name is called named function expression

a();
//abc(); //reference error abc is not defined object(annoymous) can't be called outside the function where it is defined

//annonymous function with name is called named function expression
//function expression is a function that is defined inside an expression and not in the global scope
//function declaration is a function that is defined in the global scope