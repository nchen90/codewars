// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// My Solution

function position(letter){
    return `Position of alphabet: ${letter.charCodeAt() - 96 }`
}

letter("a")

//Refactor

const position = letter => `Position of alphabet: ${letter.charCodeAt() - 96 }`