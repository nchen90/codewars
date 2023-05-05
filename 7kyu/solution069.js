// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript

function minSum(arr) {
    let first = arr.sort((a, b) => b - a).slice(0, arr.length - arr.length / 2)
    let last = arr.sort((a, b) => b - a).slice(- arr.length / 2)
    
    return first.map(x => x * last.pop()).reduce((a, b) => a + b) 
  
}