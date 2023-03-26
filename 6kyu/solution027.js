// https://www.codewars.com/kata/57f625992f4d53c24200070e/javascript

// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

// My Solution
function bingo(ticket, win){
	return ticket.filter(a => a[0].split('').some(b => b.charCodeAt() == a[1])).length
}
  

console.log(bingo([['KGGUOPOY',73], ['EP',69], ['NYJJLPUQ',88], ['RAON',84], ['CZHBRHT',80], ['EXVXUKV',70], ['OIBJMAIA',90], ['HIHEPAG',73], ['PGMVWAV',71]], 2))
