// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My Solution
function solution(string) {
let str = string.split('')
let arr = []
    for (let i = 0; i < str.length; i++) {
    	(str[i] !== str[i].toUpperCase()) ? arr.push(str[i]) : arr.push(` ${str[i]}`)  
    } 
    return arr.join('')
}