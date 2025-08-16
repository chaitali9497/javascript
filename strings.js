//Now you can call each function separately (uncomment to run), for example:

 stringBasics();
// escapeSequence();
// stringAsObject();
// stringReplaceTrimRepeat();
// stringSplit();
// stringConcat();
// stringCharMethods();
// stringSliceSubstring();
// stringCaseConversion();
// templateLiterals();
//abbreviationName();

// STRING BASICS
function stringBasics() {
    let firstName = "Chaitali";
    console.log(firstName); //chaitali

    let secondName = "Mahato";
    console.log(typeof(secondName)); //type "string";
}

// ESCAPE SEQUENCE
function escapeSequence() {
    let sentence = "i like 'rose' and my fav color is purple";
    console.log(sentence);
    console.log(typeof(sentence));

    let sentence2 = "i like \"rose\" and my fav color is purple";
    console.log(sentence2);
    console.log(sentence2.length);
}

// STRING AS OBJECT
function stringAsObject() {
    let fullName = new String("chaitali");
    console.log(fullName);
    console.log(typeof(fullName)); //object
}

// STRING METHODS: REPLACE, TRIM, REPEAT
function stringReplaceTrimRepeat() {
    let text = "  hello World  ";

    let replaceString = text.replace("hello", "hii");
    console.log(replaceString); //hii

    console.log(text.replaceAll("hello World", "hii")); //hii
    console.log(text.length); //15

    let textTrim = text.trim();
    console.log(textTrim); //hello World
    console.log(textTrim.length); //11

    console.log(text.repeat(3)); // repeats text 3 times
}

// STRING SPLIT
function stringSplit() {
    let random = "colour , blue ,rose";
    let randomSplit = random.split(",");
    console.log(randomSplit); //['colour ', ' blue ', 'rose']
}

// CONCAT
function stringConcat() {
    let text1 = "Nobi";
    let text2 = "Dora";
    let text = " hello World ";

    const textConcat = text1.concat(text2);
    const text2Concat = text1 + text2;
    const text3Concat = text1.concat(text, text2);

    console.log(textConcat);
    console.log(text2Concat);
    console.log(text3Concat); //Nobi hello World Dora
}

// CHARACTER METHODS
function stringCharMethods() {
    let text2 = "Dora";

    console.log(text2.charAt(1)); //o
    console.log(text2.indexOf("D")); //0
    console.log(text2.charCodeAt(1)); //111
    console.log(text2.at(-1)); //a
    console.log(text2.at(1)); //o
}

// SLICE & SUBSTRING
function stringSliceSubstring() {
    let text1 = "Nobi";

    console.log(text1.slice(0, 2)); //No
    console.log(text1.slice(2)); //bi
    console.log(text1.slice(-2)); //bi

    console.log(text1.substring(0, 2)); //No
    console.log(text1.substring(2)); //bi
}

// UPPERCASE & LOWERCASE
function stringCaseConversion() {
    let text1 = "Nobi";
    console.log(text1.toUpperCase()); //NOBI
    console.log(text1.toLowerCase()); //nobi
}

// TEMPLATE LITERALS
function templateLiterals() {
    let name = "Chaitali";
    let sentence3 = `My name is ${name}`;
    console.log(sentence3);

    let firstName1 = "Chaitali";
    let lastName1 = "Mahato";
    let greetingMessage = `Welcome ${firstName1} ${lastName1}.`;
    console.log(greetingMessage);

    let num = 10, num1 = 20;
    let sum = `The sum of ${num} and ${num1} is ${num + num1}.`;
    console.log(sum);

    let multiLine = `This 
is a string
that spans multiple lines.`;
    console.log(multiLine);
}

// ABBREVIATION PROBLEM
function abbreviationName() {
    // Input : Chinaswyami Mutthuswami Satish Iyer
    // Output: C.M. Iyer
    let s = "Chinaswyami Mutthuswami Satish Iyer";
    let b = "";
    const split = s.split(" ");

    for (let i = 0; i < split.length - 1; i++) {
        b = b + split[i].charAt(0) + ".";
    }
    b = b + " " + split[split.length - 1];
    console.log(b);
}


