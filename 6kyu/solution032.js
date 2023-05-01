// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

// My Solution
function sortArray(array) {
	let odds = array.filter(x => x % 2).sort((a, b) => a - b)
  
  return array.map(x => x % 2 ? odds.shift() : x)
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4]

