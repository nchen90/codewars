// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// My Solution

function opposite(number) {
    if(number < 0){
    return Math.abs(number)
    }else {
    return -Math.abs(number)
    }
}