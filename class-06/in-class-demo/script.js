// let myName = "Kassandra";
// alert("Welcome to my website!" + myName);

// 4 ways to declare a variable (create one)

// let <-- changeable variable
// const <-- constant variable, can't be changed
// var <-- bad practice in 102
// (none) <-- bad practice in 102

// DATA TYPES
// string --> "text", "42", ""
// numbers --> 42, 123, 456
// boolean --> true/false

// console.log("Hello world!");

// let myFavColor;
// console.log(myFavColor);

// myFavColor = "yellow";
// console.log(myFavColor);


// myFavColor = "purple";
// console.log(myFavColor);

// let myAge = 34;

// INPUT FROM A USER

let userName = prompt("Enter your name please");
console.log(userName);

// alert("Hello, " + userName);

// WRITING TO THE HTML DOCUMENT

document.write("Hello world");
document.write("Welcome, " + userName);

let coffeeChoice = prompt("Do you like coffee? Type yes or no");
console.log(coffeeChoice);

// structure of conditionals
// if(this is true){execute code} else if (THIS is true){execute code} else {execute code}

if(coffeeChoice == 'yes'){
  document.write("I like coffee too!");
  let favBrand = prompt("What's your favorite brand?");
} else if (coffeeChoice == 'no'){
  document.write("What about tea or cocoa?")
} else {
  document.write("I'm not sure what you picked...");
}

