//Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// My Solution

function roundToNext5(n){
	if(n % 5 == 0){
  	return n
  } else{
    return Math.ceil(n/5)*5
    } 
}

// Refactor

const roundToNext5 = n => n % 5 == 0 ? n : Math.ceil(n/5)*5