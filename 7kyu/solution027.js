// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// My Solution
function stray(numbers) {
    let a = numbers.sort();
  
    if(a[0] != a[1]) {
      return a[0]
    } 
    return a[a.length-1]
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]))