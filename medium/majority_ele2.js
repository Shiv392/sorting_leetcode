// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
// Example 1:
// Input: nums = [3,2,3]
// Output: [3]
var majorityElement = function(nums) {
    let target=Math.floor(nums.length/3);
    let map=new Map();
    let res=[];
    for(let i of nums){
        map.set(i,map.get(i)+1||1);
    }
    for(let i of nums){
        if(map.get(i)>target){
            res.push(i);
            map.delete(i);
        }
    }
    return res;
};