// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
var intersect = function(nums1, nums2) {
    let res=[];
    let map=new Map();
    for(let i=0;i<nums1.length;i++){
        if(map.has(nums1[i])){
            map.set(nums1[i],map.get(nums1[i])+1);
        }
        else{
            map.set(nums1[i],1);
        }
    }
   for(let i of nums2){
       if(map.has(i)&&map.get(i)>0){
           res.push(i);
           map.set(i,map.get(i)-1);
       }
   }
   return res;
};