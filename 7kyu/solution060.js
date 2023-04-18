// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

// My Solution
var filterString = function(value) {
    return [...value].filter(x => !Number.isInteger(x)).join('') * 1
}

