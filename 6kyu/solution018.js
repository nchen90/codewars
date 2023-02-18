// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// My Solution - my shitty solution is correct but codewars didn't accept it 
function order(words){
    let arr = ["sorted"]
        let me = words.split(' ').map((a, b) => {
            for(let i = 0; i < a.length; i++) {
              if(!isNaN(a[i])) {
                arr.splice(parseInt(a[i]), 0, a);
            }
          }
        })
        
              return arr.splice(1).join(' ')
          
}
    
console.log(order("Fo1r the2 4of g3ood pe6ople th5e"))

console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"

// Unlocked

function order(words){
    return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ')
}