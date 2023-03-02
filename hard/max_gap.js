// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.
// You must write an algorithm that runs in linear time and uses linear extra space.
// Example 1:
// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

var maximumGap = function(nums) {
    nums.sort((a,b)=>a-b);
    let res=0,max=0;
    for(let i=0;i<nums.length;i++){
        let res=nums[i+1]-nums[i];
        if(res>max){
        max=res;
        }
    }
    return max;
};