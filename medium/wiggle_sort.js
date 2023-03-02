// // Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

// // You may assume the input array always has a valid answer.
// input:[3,5,2,1,6,4]
// output:[3,5,1,6,2,4];
function wigglesort(nums){
for(let i=0;i<nums.length-1;i++){
    if(i%2==0){
        if(nums[i]>nums[i+1]){
            [nums[i],nums[i+1]]=[nums[i+1],nums[i]]
        }
    }
    else{
        if(nums[i]<nums[i+1]){
            [nums[i],nums[i+1]]=[nums[i+1],nums[i]];
        }
    }
}
return nums;
}
console.log(wigglesort([3,5,2,1,6,4]))