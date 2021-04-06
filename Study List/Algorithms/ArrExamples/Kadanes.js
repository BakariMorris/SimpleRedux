const nums = [-2,1,-3,4,-1,2,1,-5,4];

const maxSubArray = nums => {
    
    // [-2]
    // -2 1 [1]
    // [1] -3
    // [-2] 4
    // [4] -1
    // [3] 2
    // [5] 1
    // [6] -5
    // [1] 4
    // [5]
    
    let currentSubarray = nums[0];
    let maxSubArray = nums[0];


    for(let i = 1; i < nums.length; i++) {
        console.log(currentSubarray, 'currentSubarray');
        console.log(nums[i], 'num')
        currentSubarray = Math.max(nums[i], currentSubarray + nums[i]);
        maxSubArray = Math.max(currentSubarray, maxSubArray);
    }

    return maxSubArray;
}

console.log(maxSubArray(nums));