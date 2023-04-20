// https://www.codewars.com/kata/534d0a229345375d520006a0/solutions

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// My Soltuion
function isPowerOfTwo(n){
	return Math.sqrt(n * .5)
}

console.log(isPowerOfTwo(4096))