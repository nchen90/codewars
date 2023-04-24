https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
    let neg = []
    let pos = []
  
    
    
   input.map(x => x < 1 ? neg.push(x) : pos.push(x))
    
    if(input.length === 0) {
      return []
    } else {
      return [pos.length, neg.reduce((a, b) => a + b)]
    }
    
    
  }