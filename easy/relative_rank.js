// eturn an array answer of size n where answer[i] is the rank of the ith athlete.
// Example 1:
// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

var findRelativeRanks = function(score) {
    let map=new Map();
    let score2=[...score].sort((a,b)=>b-a);
    for(let i=0;i<score2.length;i++){
        map.set(score2[i],i);
    }
    for(let i=0;i<score.length;i++){
        score[i]=""+(map.get(score[i])+1);
        if(score[i]=='1') score[i]='Gold Medal';
        if(score[i]=='2') score[i]='Silver Medal';
        if(score[i]=='3') score[i]='Bronze Medal';
    }
    return score;
};