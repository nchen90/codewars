//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

//Array can contain numbers or strings. X can be either.

//Return true if the array contains the value, false if not.

//My Solution

function check(a, x) {
   let match = a.find(val => val == x)
   if(match == x) {
    return true
   } else {
    return false
   }
}

check([101, 45, 75, 105, 99, 107], 107)