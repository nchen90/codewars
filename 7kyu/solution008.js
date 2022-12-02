//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// My Solution
function descendingOrder(n){
    return Number(Array.from(String(n)).sort((a, b) => b - a).join(''))
}

// Factor
const descendingOrder = n => Number(Array.from(String(n)).sort((a, b) => b - a).join(''))

// Factor 2

function descendingOrder(n){
    return Number(String(n).split('').sort().reverse().join(''))
}