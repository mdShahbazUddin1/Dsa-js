const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

var addOneToLinkedList = function (head) {
  let node = new LinkedListNode(0);
  node.next = head;

  let previous = null;
  let current = node;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  node = previous;

  let cur = node;
  let carry;

  while (cur !== null) {
    if (cur.data + 1 > 9) {
      carry = 1;
      if (carry === 1) {
        cur.data = 0;
        cur = cur.next;
        carry = 0;
      }
    } else {
      cur.data = cur.data + 1;
      break;
    }
  }

  previous = null;
  current = node;
  next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  node = previous;

  if (node.data === 0) return node.next;
  else return node;
};
