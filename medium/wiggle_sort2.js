var wiggleSort = function(nums) {
    nums.sort((a,b)=>a-b);
    let even,odd=[];
    let mid=nums.length/2;
    mid+=nums.length%2==0?0:1;
    even=nums.slice(0,mid);
    odd=nums.slice(mid);
    for(let i=0;i<nums.length;i++){
        if(i%2==0){
            nums[i]=even.pop();
        }
        else nums[i]=odd.pop();
    }
    return nums;
  };