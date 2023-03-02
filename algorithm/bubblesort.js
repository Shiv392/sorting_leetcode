//take 2 nummber if 2nd<1st then swap
function bubblesort(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-i;j++){
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
            }
        }
    }
    return nums;
}
console.log(bubblesort([3,1,4,5,6,2]))