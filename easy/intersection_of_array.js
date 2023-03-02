// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
var intersection = function(nums1, nums2) {
    let res=[];
    let map=new Map();
    for(let i=0;i<nums1.length;i++){
        map.set(nums1[i],i);
    }
    for(let i=0;i<nums2.length;i++){
        if(map.has(nums2[i])){
            res.push(nums2[i]);
            map.delete(nums2[i])
        }
    }
    return res;
  };
  