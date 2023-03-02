function sorting(nums){
for(let i=0;i<nums.length;i++){
    let min=i;
    for(let j=i+1;j<=nums.length;j++){
        if(nums[j]<nums[min]){
            min=j;
           
        }
    }
    [nums[i],nums[min]]=[nums[min],nums[i]]
}
return nums;
}
console.log(sorting([3,1,4,5,2]));