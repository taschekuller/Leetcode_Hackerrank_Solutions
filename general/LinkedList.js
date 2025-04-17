/*
 ! Usefull notes
 * Using fast/slow structure
 * Think in while (node != null) or while (node != undefined)
 * Use dummy node to avoid edge cases
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create: 1 -> 2 -> 3
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);


// ********************
// Reversing a linkedlist
// *******************/
function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const nextTemp = curr.next; // Store next node
    curr.next = prev; // Reverse the link
    prev = curr; // Move prev to current node
    curr = nextTemp; // Move to next node
  }
  return prev; // New head of the reversed list
}


// *****************
// Detecting a cycle in a linked list (Floyd's Algorithm)
// *****************
function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next; // Move slow pointer by 1
    fast = fast.next.next; // Move fast pointer by 2
    if (slow === fast) return true; // Cycle detected
  }
  return false; // No cycle
}


// *****************
// Merging two sorted linked lists
// *****************
function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let dummy = new ListNode(0);
  let tail = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 || l2; // Append remaining nodes
  return dummy.next; // Return merged list
}


// *****************
// Finding the middle of a linked list
// *****************
function findMiddle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next; // Move slow pointer by 1
    fast = fast.next.next; // Move fast pointer by 2
  }
  return slow; // Middle node
}


// *****************
// Removing the nth node from the end of a linked list
// *****************
function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  // Move first pointer n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // Move both pointers until first reaches the end
  while (first) {
    first = first.next;
    second = second.next;
  }

  // Remove the nth node
  second.next = second.next.next;
  return dummy.next; // Return modified list
}


// *****************
// Check if a linked list is a palindrome
// *****************
function isPalindrome(head) {
  if (!head) return true;

  // Find the middle of the linked list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  while (slow) {
    const nextTemp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextTemp;
  }

  // Compare the first and second halves
  let left = head;
  let right = prev; // Start of reversed second half
  while (right) {
    if (left.val !== right.val) return false; // Not a palindrome
    left = left.next;
    right = right.next;
  }
  return true; // Is a palindrome
}