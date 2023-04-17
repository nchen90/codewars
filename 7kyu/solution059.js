// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

// My Solution
function adjacentElementsProduct(array) {
    let arr = []
        for (let i = 0; i < array.length - 1; i++) {
            arr.push(array[i] * array[i + 1])
        }
        return arr.sort((a, b) => b - a)[0]
    }