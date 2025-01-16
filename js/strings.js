//STEP 1 Create an application that prompts the user for their name. 
// Then, find the length of characters in the person’s name. 
// Use the alert method to display the result.

// let n = prompt ('Enter your name: ')
// alert (`Your name is ${n.length} characters long`)


//STEP 2 Create an application that prompts the user for their name. 
// Then, prompt the user for a numeric value so that they can find 
// the letter in the string based on the number they specify. 
// Use the alert method to display the result.

// let n = prompt ('Please enter your name: ')
// let p
// while (true) {
//     p = prompt('Enter a number to find the letter in the string at that position: ')
    
//     if (isNaN(p) || p<0 || p>=n.length)  {
//         alert ('Please enter a valid number:')
//     }else {
//         alert (`The letter at position ${p} is ${n[p]}`)
//         break;
//     }
// }


//STEP 3 Create an application that prompts the user for their first name. 
// Then, prompt the user for their last name using a second prompt. 
// Use the alert method to display the text "Your name is: "
//  along with the result of the first name and last name concatenated together.
//  You will use a concatenation operator to concatenate the literal string 
// with the result of the String object method’s result

// let f = prompt ('Enter your first name: ')
// let l = prompt ('Enter your last name: ')
// alert (`Your name is ${f.concat(' ' , l)}`)


//STEP 4 Create an application that stores the text “The quick brown fox jumps
// over the lazy dog” within a variable. Then, find and display within an alert
// the index of the word “fox”.

// let myStr = "The quick brown fox jumps over the lazy dog"
// alert (`The index of the word 'fox' in the string "${myStr}" is ${myStr.indexOf('fox')}`)

//STEP 5 Create an application that stores the text “The quick brown fox jumps 
// over the lazy fox” within a variable. Then, find and display within an alert
//  the index of the last instance of the word “fox”.

// let myStr = "The quick brown fox jumps over the lazy fox"
// alert (`The index of the word 'fox' in the string "${myStr}" is ${myStr.lastIndexOf('fox')}`)

//STEP 6 Create an application that stores the text “The quick brown fox jumped
//  over the lazy dog” within a variable. Then, prompt the user for their full 
// name. Then, replace the text “the lazy dog” in the variable with the name 
// that the user enters within the prompt. Use the alert method to display 
// the result.

// let myStr = 'The quick brown fox jumped over the lazy dog'
// let name = prompt ('Please enter your full name: ')
// alert (`Here is a fun story: ${myStr.replace('the lazy dog', name)}.`)

//STEP 7 Create an application that stores the text “The quick brown fox jumps
// over the lazy dog” within a variable. Then, prompt the user for a word.
// Next, search for the word within the string that the user enters into the 
// prompt. Use the alert method to display the result.

// let myStr = 'The quick brown fox jumps over the lazy dog'
// let w = prompt ('Input the word that you want to search for: ')

// if (myStr.match(new RegExp (w,'g'))) {
//     alert (`Found "${w}" at position ${myStr.search(new RegExp(w, 'g'))} of the string: "${myStr}".`)
// }else {
//     alert (`Cannot find the word "${w}" in the string: "${myStr}"`)
// }

//STEP 8 Create an application that stores the text “The quick brown fox 
// jumps over the lazy dog” within a variable called old_string. 
// Then, use slice(), substr(), or substring() to extract the words
//  “the lazy dog” from the old_string variable and store that result in a 
// second variable called new_string. Use the alert method to display the
//  uppercase result of new_string.

// let old_string = 'The quick brown fox jumps over the lazy dog'
// let new_string = old_string.slice(31)
// alert(`This is new string: ${new_string.toUpperCase()}`)

//STEP 9 Create an application that stores the text “ THE QUICK BROWN FOX JUMPS
// OVER THE LAZY DOG          ” within a variable. Make sure to add space 
// before and after the text so that appears very similar to the text here. 
// Use the alert method to display the lowercase result of the variable once 
// the space has been trimmed off.

// let s = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          '
// alert(`After trimming: '${s.trim().toLowerCase()}'`)

//STEP 10 Create an application that stores the text “the quick brown fox jumps
//  over the lazy dog” within a variable. The user clearly forgot to capitalize
//  the first letter in the sentence. Programmatically capitalize the first 
// letter in the sentence and display the result in an alert.

let s = 'the quick brown fox jumps over the lazy dog'
alert (`Polished sentence: '${s.charAt(0).toUpperCase()+ s.slice(1)}'`)
