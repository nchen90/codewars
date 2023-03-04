// https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My Solution
function XO(str) {
	let string = str.toLowerCase().split('')
    return string.filter(x => x == 'x').length === string.filter(o => o == 'o').length
}

console.log(XO("XxxOoo")) 