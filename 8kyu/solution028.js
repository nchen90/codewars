//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// My Solution

function problem(x){
    if(typeof x !== "number"){
        return "Error"
    }else {
    		return x * 50 + 6
    }
}

// Refactor

const problem = x => (typeof x !== "number") ? "Error" : x * 50 + 6