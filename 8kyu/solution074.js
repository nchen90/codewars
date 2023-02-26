// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

// My Solution
function century(year) {
    return Math.ceil(year / 100)
}

console.log(century(1705))















// Old code from a failed attempt lol...

// function century(year) {
//     let val;
//     let num = Number(year.toString().slice(0,2))
//     if (year < 100) {
//       val = 1
//     }else if(year % 100 !== 0){
//        val = Math.floor((year / 100) + 1)  
//     } else {
//        val = num
//     }
    
//     return val;
//   }