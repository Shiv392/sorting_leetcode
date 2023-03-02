//find pivot(lst elememt)
//iterate over aray 
//if element < pivot , push it into leftarr
//else push ii into rightarr

function quick(nums){
    if(nums.length<2) return nums;
    let left=[],right=[];
    let pivot=nums[nums.length-1];
    for(let i of nums){
        if(i==pivot) continue;
        if(i<pivot){
            left.push(i);
        }
        else right.push(i);
    }
    return [...quick(left),pivot,...quick(right)];
}
console.log(quick([3,1,4,2,5]))