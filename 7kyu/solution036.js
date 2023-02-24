// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// My Solution
function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
		let arr = []
    let me = [...str].map((a,b) => {
    	if(!vowels.includes(a)) {
      	arr.push(a)
      }
    })
    return arr.join('')
}

console.log(disemvowel("This website is for losers LOL!"))
// "Ths wbst s fr lsrs LL!"

// Unlocked better solution

const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}