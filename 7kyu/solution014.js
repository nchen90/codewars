// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// My Solution

function smallEnough(a, limit){
	let arr = a.filter(x => x > limit)
  console.log(arr)
    if(arr.length >= 1){
    return false
    }else {
    return true
    }
}

console.log(smallEnough([66, 101], 200))

// Refactor

function smallEnough(a, limit){
	return a.filter(x => x > limit) <= limit
}