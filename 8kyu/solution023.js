//Write a function that returns a string in which firstname is swapped with last name.

// My Solution 

function nameShuffler(str){
    let arr = str.split(' ')
    return `${arr[1]} ${arr[0]}`
}

// Refactor 

function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
}