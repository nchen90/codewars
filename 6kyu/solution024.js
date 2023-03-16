// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// My Solution
function cleanString(s) {
  let arr = []
  let me = [...s].map(x => x === '#' ? arr.pop() : arr.push(x))

  return arr.join('')
} 

