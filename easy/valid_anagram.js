// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

var isAnagram = function(s, t) {
    // return s.split('').sort().join('')===t.split('').sort().join('')
    let map=new Map();
    for(let i of s){
      map.set(i,(map.get(i)||0)+1);
    }
    for(let i of t){
       if(map.has(i)){
       map.set(i,map.get(i)-1);
       if(map.get(i)==0){
           map.delete(i);
       }
       }
       else return false;
    }
    return map.size==0;
    };