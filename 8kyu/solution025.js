//Build a function that returns an array of integers from n to 1 where n>0.

// My Solution

const reverseSeq = n => {
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }
    return arr.reverse()
};