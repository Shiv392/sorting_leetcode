function mergesort(nums){
    //base and main condition
    //divide array untill we get one element array
    if(nums.length<2) return nums;
    //get mid
    let mid=Math.floor(nums.length/2);
    //leftarr
    let leftarr=nums.slice(0,mid);
    let rightarr=nums.slice(mid);
    //recursive call
    return merge(mergesort(leftarr),mergesort(rightarr));
}
function merge(leftarr,rightarr){
    let res=[];
    while(leftarr.length&&rightarr.length){
        if(leftarr[0]<rightarr[0]){
        res.push(leftarr.shift());
        }
        else res.push(rightarr.shift());
    }
    return [...res,...leftarr,...rightarr];
}
console.log(mergesort([3,2,1,4,5,6]));