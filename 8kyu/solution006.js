//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

//My solution

function solution(nums){
    if(nums === null || nums == []) {
        return []
    } else {
       return nums.sort((a,b) => {
            return a-b;
           })
    }
}