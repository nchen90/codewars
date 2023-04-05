// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// My Solution
function rowWeights(array){
  let team1 = [];
  let team2 = [];
  
  array.map((a, b) => b % 2 === 0 ? team1.push(a) : team2.push(a))
  
  if (team1.length === 0) {
   team1.push(0)
  } 
  
   if (team2.length === 0) {
   team2.push(0)
  } 
  
  
 
  
  return [team1.reduce((a, b) => a + b),  team2.reduce((a, b) => a + b)]
}