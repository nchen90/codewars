//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// My Solution

function remove (string) {
    if(string.slice(-1) == "!"){
        return string.slice(0, -1)
    }else {
        return string
    }
}

// Refactor

const remove = string => (string.slice(-1) == "!") ? string.slice(0, -1) : string