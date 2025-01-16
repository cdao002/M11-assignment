//STEP 1 Create an application that prompts the user for a number. Regardless 
// of whether they enter a negative or positive number, make sure to display 
// the positive version of that number in the console window. If I enter -15
//  in the prompt and -15 is displayed in the console window, you did this one
//  wrong.

// let num = Number(prompt ('Enter a valid number'))
// if (!isNaN(num)) {
//     alert (`The positive version of your number is ${Math.abs(num)}`)
// } else {
//     alert ('You entered an invalid number.')
// }

//STEP 2 Create an application that prompts the user for a floating point value
// (decimal). Store the result of that input in a variable and then round it up
// to the nearest whole number. Display the result within a console window.

// let float = Number(prompt ('Enter a floating number'))
// if (!isNaN(float)){
//     console.log(`Your number has been rounded up to: ${Math.ceil(float)}`)
// } else {
//     console.log ('You did not input a valid floating number.')
// }

//STEP 3 Create an application that prompts the user for a floating point value
// (decimal). Store the result of that input in a variable and then round it 
// down to the nearest whole number. Display the result within a console window.

// let float = Number(prompt ('Enter a floating number'))
// if (!isNaN(float)){
//     console.log(`Your number has been rounded down to: ${Math.floor(float)}`)
// } else {
//     console.log ('You did not input a valid floating number.')
// }

//STEP 4 Create an application that prompts the user for 5 numbers. Ask them to
// comma delimit each number so you get 1,2,3,4,5 for example. Store the result
// of that input in a variable and then find the largest and smallest numbers
// in that list. Display both of those numbers within a console window.

// let ask = prompt ('Enter 5 numbers, separated by commas: ')
// let inputArray = ask.split(',')

// let isValid = true;
// for (let i = 0; i < inputArray.length; i++) {
//     if (isNaN(inputArray[i])) {
//         isValid = false;
//         break;
//     }
// }

// if (inputArray.length ===5 && isValid){
//     inputArray = inputArray.map(Number)

//     console.log (`The largest number is: ${Math.max(...inputArray)}`)
//     console.log (`The smallest number is: ${Math.min(...inputArray)}`)
// } else {
//     console.log ('You will need to input exactly 5 valid numbers, separated by commas.')
// }

//STEP 5 Create an application that prompts the user for a number. Now find the
//  square root of that number and display the result within a console window.
 
let num = Number(prompt ('Enter a number:'))
if (!isNaN(num)){
    console.log (`The square root of ${num} is ${Math.sqrt(num)}`)
} else {
    console.log ('You did not input a valid number')
}
