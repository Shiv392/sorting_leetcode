// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.
// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

function four_sum(nums,k){
if(nums.length<4) return [];
let res=[];
nums.sort((a,b)=>a-b);
let n=nums.length;
for(let i=0;i<n-3;i++){
    if(nums[i]+nums[i+1]+nums[i+2]+nums[i+3]>k) break;
    if(i>0&&nums[i]==nums[i-1]) continue;
    if(nums[i]+nums[n-3]+nums[n-2]+nums[n-1]<k) continue;
for(let j=i+1;j<n-2;j++){
    if(nums[i]+nums[j]+nums[j+1]+nums[j+2]>k) break;
    if(j>i+1&&nums[j]==nums[j-1]) continue;
    if(nums[i]+nums[j]+nums[n-2]+nums[n-1]<k) continue;
    let left=j+1,right=n-1;
    while(left<right){
        let sum=nums[i]+nums[j]+nums[left]+nums[right];
        if(sum==k){
            res.push([nums[i],nums[j],nums[left],nums[right]]);
            left++;
            right--;
     while(left<right&&nums[left]==nums[left+1]) left++;
     while(left<right&&nums[right]==nums[right-1]) right--; 
        }
        else if(sum<k) left++;
        else if(sum>k) right--;
    }
}
}
return res;
}

console.log(four_sum([1,0,-1,0,-2,2],0));