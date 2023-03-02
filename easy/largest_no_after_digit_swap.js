// You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).
// Return the largest possible value of num after any number of swaps.
// Example 1:
// Input: num = 1234
// Output: 3412
// Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.
// Swap the digit 2 with the digit 4, this results in the number 3412.
// Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.
// Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.
var largestInteger = function(num) {
    let s=String(num).split('');
    let odd=[],even=[];
    for(let i=0;i<s.length;i++){
        s[i]%2==0?even.push(+s[i]):odd.push(+s[i]);
    }
    even.sort((a,b)=>a-b);
    odd.sort((a,b)=>a-b);
    let res=[];
    for(let i=0;i<s.length;i++){
        s[i]%2==0?res.push(even.pop()):res.push(odd.pop());
    }
    return res.join('')
};