// https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/javascript
// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\          
//                     4/            4|          4\      
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*


// Fold 2-times:
// [1,2,3,4,5] -> [9,6]
// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.

// The input array should not be modified!

// My Solution - unsolved, got stuck on multiple runs
function foldArray(array, runs){
	let first = array.splice(0, array.length / 2)
  let last = array.reverse()
  let middle = []
  let arr = []
  let count = 0
  
 if (first.length !== last.length) middle.push(last.pop())
  
  if(count >= runs) {
  if (middle.length > 0) arr.push(middle[0])
  	return arr
  } else {
  	first.map((x, i) => arr.push(x + last[i]))
    count++
   return foldArray(arr, runs - 1)
  }
}

console.log(foldArray([ 1, 2, 3, 4, 5 ], 1))
// 1x [6,6,3], 2x [9,6]


// unlocked 
function foldArray (array, runs) {
    let arrayToFold = Array.from(array);
    while (runs > 0) {
        let resultArray = [];
        while (arrayToFold.length > 1) {
            let firstElement = arrayToFold.shift();
            let lastElement = arrayToFold.pop();
            resultArray.push(firstElement + lastElement);
        }
        arrayToFold = [...resultArray, ...arrayToFold];
        runs--;
    }
    return arrayToFold;
};