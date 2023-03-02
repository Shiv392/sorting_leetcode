// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
// Return the sorted array.
// Example 1:
// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
var frequencySort = function(nums) {
    let map=new Map();
    for(let i of nums){
        if(map.has(i)) map.set(i,map.get(i)+1);
        else map.set(i,1);
    }
    return nums.sort((a,b)=>map.get(a)-map.get(b)||b-a);
 };