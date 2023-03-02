// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
var topKFrequent = function(nums, k) {
    let map=new Map();
    for(let i of nums){
        map.set(i,map.get(i)+1||1);
    }
    return [...map.keys()].sort((a,b)=>map.get(b)-map.get(a)).slice(0,k)
};