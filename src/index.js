import emojipedia from "./emojipedia";
console.log(emojipedia.reduce);

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => {
  return x * 2;
});
//console.log(newNumbers);
//Filter - Create a new array by keeping the items that return true.
numbers.filter(function (num) {
  return num > 10;
});

//Reduce - Accumulate a value by doing something to each item in an array.
var numberReduce = numbers.reduce((accumulator, currentNumber) => {
  //console.log("accumulator = " + accumulator);
 //console.log("currentNumber= " + currentNumber);
  return accumulator + currentNumber;
});

//Find - find the first item that matches from an array.
const newNumber = numbers.find((num) => {
  return num > 10;
});
//FindIndex - find the index of the first item that matches.

const newNumberIndex = numbers.findIndex((num) => {
  return num > 10;
});

/*const emojiPediaReduce = emojipedia.meaning.reduce(
  (accumulator, currentElement) => {
    return accumulator + currentElement;
  }
);*/
