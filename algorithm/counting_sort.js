//counting sort in non-comparison based algoright
//1.takes max value of array 
//2.make temp- array of size max+1;
//3.push all occurance of element into temp arr
//4.now write all element of temp arr with its no of occurance
function countingsort(nums){
    let max=Math.max(...nums);
    let temparr=new Array(max+1).fill(0);  //temparr to store occurance
    for(let i=0;i<nums.length;i++){
        temparr[nums[i]]++; //store numbe ralong with its occrance
    }
    let res=[];
    for(let i=0;i<temparr.length;i++){
        for(let j=0;j<temparr[i];j++){
            res.push(i) 
        }
    }
    return res;
}
console.log(countingsort([5,2,1,3,4]));
