function greeting(){
  let userName = prompt("Enter your name please");
  console.log(userName);
  document.write("Hello world");
  document.write("Welcome, " + userName);
  return userName;
}

function likesCoffee(){
  let coffeeChoice = prompt("Do you like coffee? Type yes or no");
  console.log(coffeeChoice);
  
  if(coffeeChoice == 'yes'){
    document.write("I like coffee too!");
    let favBrand = prompt("What's your favorite brand?");
  } else if (coffeeChoice == 'no'){
    document.write("What about tea or cocoa?")
  } else {
    document.write("I'm not sure what you picked...");
  }
}

// // ANATOMY OF A FUNCTION

// function declaration / function definition <-- typical way you'll make functions in 102
// Example:
// function functionName(parameters){code to execute goes here;}

//                     parameters - extra information the function will need to do its job
function addTwoNumbers(num1, num2){
  let sum = num1 + num2;
  console.log(sum);
  return sum;
}

// invoke/call the function (use it) - give it 2 pieces of expected extra information (arguments)
addTwoNumbers(5, 10);
// ----------------------------------------------------
// FUNCTION EXPRESSION <-- don't do this in 102

// let newFunction = function(){
//   console.log("I'm in the new function");
// }

// invoke the function expression just the same as a declared/defined function
// newFunction();

// ----------------------------------------------------

// We can pass variables, numbers, strings, etc into a function as ARGUMENTS

// passing NUMBERS as arguments
// addTwoNumbers(5, 10);
// addTwoNumbers(10, 100);

// passing STRINGS & NUMBERS as arguments
// addTwoNumbers("hello", "world");
// addTwoNumbers(5, "ninety");

// passing VARIABLES as arguments

// let firstName = "Kassie";
// let lastName = "Bradshaw";

// addTwoNumbers(firstName, lastName);
// newFunction();

