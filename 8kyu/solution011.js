//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

//Mind the input validation.

// My Solution

// function sumArray(array) {
//     return array.reduce((acc, val) => {
//         return acc + val
//     })
// }


function sumArray(array) {
   let sortedArray = array.sort((a,b) => {
    return a-b;
   })
   let firstArray = sortedArray.shift()
   let lastArray = sortedArray.pop()
   console.log(sortedArray)
   return sortedArray.reduce((acc, val) => {
             return acc + val
         })
}

console.log(sumArray([-6, -20, -1, -10, -12]))