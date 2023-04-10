// https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript

// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// input: 'CodeWars'
// output 'CdWr oeas'

// My Solution
function sortMyString(S) {
	let arr1 = []
  let arr2 = []
	for(let i = 0; i < S.length; i++) {
  	if(i % 2 === 0) {
    	arr1.push(S[i])
    } else {
    	arr2.push(S[i])
    }  
  }
  return `${arr1.join('')} ${arr2.join('')}`
}