//STEP 1 Write a JavaScript function that returns a passed string with letters 
// in alphabetical order. Assume punctuation and number symbols are not included
// in the passed-in string.

// function sortText(str){
//     return str.split('').sort().join('')
// }
// console.log (sortText('webmaster'))


//STEP 2 Write a JavaScript function that accepts a string as a parameter and 
// converts the first letter of each word of the string to upper case.

// function convString(str){
//     return str
//         .split(' ')
//         .map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//         .join (' ')
// }
// console.log (convString('the quick brown fox'))

//STEP 3 Write a JavaScript function that accepts a string as a parameter and
// counts the number of vowels within the string.

// function vowelString(str){
//     const v = 'aeiou'
//     let count = 0
//     for (let i=0; i<str.length; i++){
//         if (v.includes(str[i].toLowerCase())){
//             count++
//         }
//     }
//     return count
// }
// console.log(vowelString('The quick brown fox'))

//STEP 4 Write a JavaScript function that generates a string id (specified length)
// of random characters.

// function randSt(len){
//     let str = ''
//     for (let i=0; i < len; i++){
//         const rd = Math.floor((Math.random()*62))

//         let charCode
//         if (rd <26){
//             charCode = rd+97
//         } else if (rd <52){
//             charCode = rd -26 +65
//         } else {
//             charCode = rd -52 +48
//         }
//         str += String.fromCharCode(charCode)
//     }
//     return str
// }
// console.log(randSt(8))

//STEP 5 Write a JavaScript function that accepts a list of country names as 
// input and returns the longest country name as output.

function Longest_Country_Name(array){
    let longest=''
    for (let i=0; i<array.length; i++)
    {
        if (array[i].length>longest.length){
            longest = array[i]
        }
    }
    return longest
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]))
