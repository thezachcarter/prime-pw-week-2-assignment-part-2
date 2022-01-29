// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string.
// Then we check if name strictly equals 'Mary'.
// If so, we console.log 'Hi, Mary!'. If not, we console.log 'How do you do?'.
// Since name is 'Dane" and not 'Mary', we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We establish a variable named secret with no assigned value.
// We make a variable called code and set it to 123 as a number.
// We check if the variable code strictly equals 123, it does.
// Since the if statment for the value of code is true, we run code setting the
// variable secret to the string "super" and multiplying the variable code by 2.
// We check to see if the variable code is now greater than 250, if it is,
// the variable secret will be set to duper. Code is not greater than 250,
// because it is 246
// We console.log the variable secret, which is 'super'.
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We set 3 variables: isStudent is true as a boolean, age is 34 as a number,
// zip is 55407 as a number.
// We check if isStudent is true AND if zip is greater than 80000, if so
// we console.log 'You're a student on the West Coast!'. isStudent is true, but
// zip is not greater than 80000. So, we don't console.log anything,
// instead we check the next condition.
// If isStudent is equal to false OR age is less than 30 we console.log
// 'What are your hobbies?'. Neither of those conditions are met. So, we don't
// console.log anything, instead we check the next condition.
// If isStudent is true we console.log 'Welcome to Prime!'. It is true and
// we do console.log 'Welcome to Prime!'.
// If none of the first three conditions would have been met, the default
// console.log output would be 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - The values of the first two variables are swapped.
// According to the instructions colorOne should be set to 'blue' and
// colorTwo should bed set to 'red'.

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - Since mix === true the colorTwo variable should also be set to purple,
// according to the instructions.

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

// FIX - We should set a variable named time with a value of 4, according
// to the instructions. In the code, it is set to a constant, not a variable.

/*
let temp = 40;
const time = 4;

// FIX - We should check if temp is higher than 39 AND (&&) if time is greater
// or equal to  4. In the code, it is set to check if temp is higher than 39
// OR (||) if time is greater or equal to  4.

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

// FIX - We should set a variable named minAge with a value of 21, according
// to the instructions. In the code, it is set to a constant, not a variable.

/*
let age = 21;
const minAge = 21;

// FIX - The instructions tell us to check if age is greater than or equal to
minAge. The code asks if minAGE is less than or equal to age, which would yield
the same result, but should probably be changed for clarity. Since either
statment is true, console.log for the if statment should be 'enter', not
'no entry'. Presumably, console.log for the if statment should be 'no entry',
but I don't have enough information to say for certain. 

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
