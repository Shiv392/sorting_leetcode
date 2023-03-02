// Given the head of a linked list, return the list after sorting it in ascending order.
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head) return null
    let sortedarr=sortnode(head);
    let reslist;
    for(let i=0;i<sortedarr.length;i++){
        reslist=new ListNode(sortedarr[i],reslist);
    }
    return reslist;
 };
 function sortnode(head){
     let arr=[];
     while(head){
         arr.push(head.val);
         head=head.next;
     }
     return arr.sort((a,b)=>b-a);
 }
 