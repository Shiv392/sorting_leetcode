// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
// Example 1:
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>a[1]-b[1]);
     let res=0;
     let prev=intervals[0];
     for(let i=1;i<intervals.length;i++){
         if(intervals[i][0]<prev[1]) res++;
         else prev=intervals[i];
     }
     return res;
 };