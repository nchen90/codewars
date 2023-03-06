// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// My Solution
function getMiddle(s) {
    let first = s.split('').splice(0, s.length / 2)
    let second = s.split('').splice(s.length / 2)
    
    if (s.length < 2) {
        return s
    } else if (s.length % 2 !== 0) {
        return second[0]
    } else {
         return first[first.length - 1] + second[0]
    }
}