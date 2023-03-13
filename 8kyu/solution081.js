// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "

// My Solution
function reverseWords(str){
    return str.split(' ').reverse().join(' ')
  }