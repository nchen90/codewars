// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// 42 --> ..... = 74088

// My Solution
function rowSumOddNumbers(n) {
	let triangle = []

    for(i = 1; i <= Math.pow(n, 2) + n; i += 2){
         triangle.push(i)
    }
    return triangle.slice(-n).reduce((a, b) => a + b)
}


console.log(rowSumOddNumbers(2))

// Refactor from CW
// fuckkkkk lol

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}


