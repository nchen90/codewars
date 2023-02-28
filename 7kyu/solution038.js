// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// My Solution 

function isSortedAndHow(array) {
		let arr = array.join('')
		let ascending = array.sort((a, b) => a - b).join('')
    let descending = array.sort((a, b) => b - a).join('')
    
    return arr === ascending ? 'yes, ascending' : arr === descending ? 'yes, descending' : 'no'
		
}