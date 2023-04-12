// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// My Solution
function sumEvenNumbers(input) {
  let even = []

  if (input.length == 0) return 0
	for (let i = 0; i < input.length; i++) {
  	if (input[i] % 2 == 0) {
      even.push(input[i])
    }
  }
  return even.reduce((a, b) => a + b)
}