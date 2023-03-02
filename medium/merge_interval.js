// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    for(let i=1;i<intervals.length;i++){
        const [x,y]=intervals[i];
        const [prevx,prevy]=intervals[i-1];
        if(x<=prevy){
            intervals[i-1][1]=Math.max(y,prevy);
            intervals.splice(i,1);
            i--;
        }
    }
    return intervals;
};