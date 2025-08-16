const students =[
    {
    firstName: "anu",
    Roll: 5,
    Marks: 34
},
{
    firstName: "anusika",
    Roll: 5,
    Marks: 64
},
{
    firstName: "nil",
    Roll: 5,
    Marks: 88
}
]
const newarray = students.filter(student => student.Marks > 50);
console.log(newarray);