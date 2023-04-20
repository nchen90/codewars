// https://www.codewars.com/kata/559f44187fa851efad000087/train/javascript

// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

// My Solution
function sevenAte9(str) {
    let arr = []
      for (let i = 0; i < str.length; i++) {
          if (str[i] === '9' && str[i - 1] == '7' && str[i + 1] == '7') {
        console.log(str[i])
                
        } else {
        arr.push(str[i])
        }
      }
      return arr.join('')
    }