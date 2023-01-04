// https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/javascript

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// My Solution
function include(arr, item){
    return arr.indexOf(item) >= 0
}

include([1,2,3,4], 3)