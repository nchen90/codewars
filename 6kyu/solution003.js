// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/javascript

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

// My solution - got stuck
function decipherThis(str) {
	let arr = []
  let num = str.match(/\d+/g).map(x => String.fromCharCode(x))
  let letters = str.match(/[a-zA-Z]+/g)
  
  for(let i=0; i < letters.length; i++){
  let first =  letters[i].split('').pop()
  let last = letters[i].split('')[0]
  console.log(letters[i].split('').unShift(first))
  }
	//console.log(letters)
} 

console.log(decipherThis('72olle 103doo 100ya'))

// Unlocked Solution

function decipherThis(str) {
    return str.split(" ")
      .map(w =>
        w.replace(/^\d+/, c => String.fromCharCode(c))
         .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
      )
      .join(" ")
}