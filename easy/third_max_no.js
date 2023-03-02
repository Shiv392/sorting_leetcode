var thirdMax = function(nums2) {
    let set=new Set(nums2);
    if(set.size<3) return Math.max(...set)
    let arr=Array.from(set)
    arr.sort((a,b)=>b-a);
    return arr[2]
    
    };