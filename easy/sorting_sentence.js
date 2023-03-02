// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
// Example 1:
// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
var sortSentence = function(s) {
    s=s.split(' ').sort((a,b)=>{
        return a[a.length-1]-b[b.length-1]
    });
    return s.join(' ').replaceAll(/[0-9]/g,"")
};