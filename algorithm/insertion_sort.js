function sorting(nums){
for(let i=1;i<nums.length;i++){
    for(let j=i;j>=0;j--){
   if(nums[j]<nums[j-1]){
    [nums[j],nums[j-1]]=[nums[j-1],nums[j]]
   }
    }
}
return nums;
}
console.log(sorting([4,1,3,5,2,6]));