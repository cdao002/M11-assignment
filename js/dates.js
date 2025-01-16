//STEP 1 Create an application that gets the number of days in a month. Display
//  that result within the console window.

// let mon = Number(prompt ('Enter the month: '))
// let yr = Number(prompt('Enter the year: '))

// if (mon >=1 & mon<=12 && !isNaN(yr)){
//     let newMon = new Date(yr,mon,0)
//     console.log (`The numbers of days in the month of ${mon} year ${yr} is ${newMon.getDate()}`)
// } else {
//     console.log ('You did not enter a valid month/year.')
// }

//STEP 2 Create an application that gets the month name from a particular date.
//  Display that result within the console window.

// let input = prompt('Enter a date as YYYY-MM-DD: ')
// let d = new Date(input)
// if (!isNaN(d.getTime())){
//     console.log (`The name of the month is: ${d.toLocaleString('default',{month: 'long'})}`)
// } else {
//     console.log ('You did not enter a valid date.')
// }

//STEP 3 Create an application that tests whether a date is a weekend. Display 
// that result within the console window.

// let input = prompt('Enter a date as YYYY-MM-DD: ')
// let d = new Date(input)
// if (!isNaN(d.getTime())){ 
//     if (d.getDay()==0 || d.getDay()==6) {
//         console.log (`The date you entered is a weekend.`)
//     } else {
//        console.log( `The date you entered is not a weekend.`)
//     }
// } else {
//     console.log ('You did not enter a valid date.')
// }


//STEP 4 Create an application that gets yesterday’s day of the week. For
// instance, if today is Tuesday, the console window should display Monday.

// let td = new Date()
// let yest = new Date(td)
// yest.setDate(td.getDate()-1)

// console.log (`Yesterday was ${yest.toLocaleString('default', {weekday: 'long'})}.`)

//STEP 5 Create an application that gets the current day of the week. The twist
//  here is that I want only the first letter of the day. If today is Tuesday, 
// the letter T should be displayed in the console window.

let td = new Date()
const wd = ['SU','M','T','W','TH','F','S']
console.log (`The first letter of today's date is ${wd[td.getDay()]}`)
