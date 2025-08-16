//Es6 feature
//ES6  -->EcmaScript 2015

var a = 20;
let b = 50;
const c = 60;
console.log(a);
console.log(b);
console.log(c);

//redecleared or inizilized the values

var a = 21;   // redecleared and initiazized
// let b = 51; output already decleared
b = 51; //redecleared and initiazized without using let keyword 
// const c =61;  //output already decleared
// c =61; //output typeerror
console.log(a);
console.log(b);
console.log(c);

{
    var a = 22;
    var a1 = 30;
    let b = 60;
    let b1 = 63
    const c = 62;
    const c1 = 69;
    console.log(a);
    console.log(a1);
    console.log(b);
    console.log(b1);
    console.log(c)
    console.log(c1);


}
console.log(a);
console.log(a1);
console.log(b);
//console.log(b1); // not defined
//console.log(c1); //reference error
