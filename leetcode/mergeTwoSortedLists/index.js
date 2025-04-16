var mergeTwoLists = function(list1, list2) {
  dummyPointer = new ListNode();
  curr = dummyPointer;

  while(list1 && list2) {
      if(list1.val > list2.val){
          curr.next = list2;
          list2=list2.next;
      } else {
          curr.next=list1;
          list1=list1.next;
      }
      curr = curr.next;
  }

  curr.next = list1 || list2;

  return dummyPointer.next;
};