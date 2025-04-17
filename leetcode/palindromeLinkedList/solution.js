/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head;
  let fast = head;

  while(fast && fast.next) {
      slow = slow.next; // 1 -> 2
      fast = fast.next.next; // 1 -> 2 -> 2 -> 1 for instance
  }

  // Reversed the list of slow from half
  let prev = null;
  while(slow) {
      const nextTemp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = nextTemp;
  }

  let left = head;
  let right = prev;
  while(right) {
      if(left.val !== right.val){
          return false
      } else {
          left = left.next;
          right = right.next;
      }
  }

  return true;
};