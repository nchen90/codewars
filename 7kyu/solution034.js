// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

// Your task is to write function factorial.

// My Solution solved with recursion

function factorial(n){
    if(n <= 1){
        return 1
        }else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))

// Solved using a while loop

function factorial(n){
    let num = 1
    while(n > 1){
        num = num * n
        n--
    }
    return num
}