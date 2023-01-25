// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// My Solution

var capitals = function (word) {
    let arr = []
        let me = word.split('').map((a, b) => {
           if(a === a.toUpperCase()){
             arr.push(b)
         } 
      })
      return arr
};

console.log(capitals('CodEWaRs')) //[0,3,4,6] 