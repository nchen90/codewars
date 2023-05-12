// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s){
    let upper = [];
    let lower = [];
    
    [...s].map(x => x === x.toUpperCase() ? upper.push(x) : lower.push(x))
    
  	return upper.length > lower.length ? s.toUpperCase() : s.toLowerCase()
}