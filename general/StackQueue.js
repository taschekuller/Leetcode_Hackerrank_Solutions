/*
 ! important notes
  * Implement queue using 2 stacks
  * Stack + Hashmap for "matching structures such as brackets"
*/

// ! Stack
// ***
// Stack implementation using a linked list
// ***
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new ListNode(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

// ! Queue
// ***
// Queue implementation using a linked list
// ***
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const dequeuedValue = this.front.value;
    this.front = this.front.next;
    if (this.front === null) this.rear = null; // Queue is empty now
    this.size--;
    return dequeuedValue;
  }
  peek() {
    return this.isEmpty() ? null : this.front.value;
  }
  isEmpty() {
    return this.size === 0;
  }
}