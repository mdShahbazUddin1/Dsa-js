const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var hasCycle = function (head) {
  let f = head;
  let s = head;

  while (f && f.next) {
    f = f.next.next;
    s = s.next;

    if (f === s) return true;
  }
  return false;
};
