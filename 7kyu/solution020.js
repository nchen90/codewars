// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

// My Solution

function capitalize(s){
   let even = [...s].map((x, i) => i % 2 == 0 ? x.toUpperCase() : x ).join('')
   let odd = [...s].map((x, i) => i % 2 !== 0 ? x.toUpperCase() : x ).join('')
   return [even, odd]
};

console.log(capitalize("abcdef"))