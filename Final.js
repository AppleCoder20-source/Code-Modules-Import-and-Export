//Part 2 
//Sort by age 

const people = [
        { 
            id: "42",
            name: "Bruce", 
            occupation: "Knight",
            age: "41" ,
        },
        { 
            id: "48", 
            name: "Barry", 
            occupation: "Runner", 
            age: "25" ,
        },        
        {
            id: "57",
            name: "Bob",
            occupation: "Fry Cook",
            age: "19",
        },
        {
            id: "63",
            name: "Blaine", 
            occupation: "Quiz Master", 
            age: "58",
        },
        {
            id: "7",
            name: "Bilbo",
            occupation: "None",
            age: "111" ,
        }
];
people.forEach((person) => {
    person.age = Number(person.age); // Convert the age to a number for each person
});
//Sort age 
people.sort((a, b) => a.age - b.age); //sort age based off of ascending order,
console.log(people)

//Filter age
let filter = people.filter((user ) => user.age  < 50);
console.log("Ages less than 50 from filter:");
console.log(filter);
//map person and increment age 

const map = people.map(persons => {
    return{
        ID: persons.id,
        Name: persons.name,
        Job: persons.occupation,
        Age: persons.age + 1
    }
});
console.log(map);

const total = people.reduce((totals, peoples) => {
    return totals + peoples.age
  }, 0);
const avg = total / people.length
console.log(total)

//Part 3 

const NewObj = {
    ID: "42",
    Name: "M", 
    occupation: "Software Engineer",
    age: "22",
    time: new Date(),
};
console.log(NewObj)
let counter = Number(NewObj.age) + 1;

//Used Spread Operator to make a copy

const copiedObj = { ...NewObj }; 
copiedObj.age = Number(copiedObj.age) + 1;

console.log("Copy with Incremented Age:", copiedObj);
console.log(`Copy: real age of M isnt 22 its  ${copiedObj.age} years old!`);
console.log(`Original: real age of M isnt 22 its ${counter} years old!`)//This is without copy

/*
Part 5:
Almsot all of our previous labs could be turned into functions, like for the control flow lab, the calculations can be done with a function
We can make a function  to calcuate the area of garden, a function with if else comparisons for when to prune, when to garden our plants
A function to for all the calcuations, a function for the try catch block

What can be optimized is to make try and make some of the code a bit more concise, and to use functions
*/
