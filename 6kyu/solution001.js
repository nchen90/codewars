// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// My Solution 

function sortArray(array) {
    let sorted = []
    array.forEach((num, i) => {
        if(num % 2 !== 0 ){
            console.log(num)
        }
    })
}

