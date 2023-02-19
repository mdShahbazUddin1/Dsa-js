const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var removeMaximum = function (head) {
  let cur = head;
  while (cur !== null) {
    let max = maximum(head);
    let pos = pointer(head, max);
    let current = removeNode(head, pos);
    cur = cur.next;

    return current;
  }
};

function maximum(head) {
  let max = 0;
  let current = head;
  while (current !== null) {
    if (current.data > max) {
      max = current.data;
    }
    current = current.next;
  }
  return max;
}

function pointer(head, max) {
  let current = head;
  let at = undefined;
  let i = 0;

  while (current !== null) {
    if (current.data === max) {
      at = i;
    }
    i++;
    current = current.next;
  }
  return at;
}

function removeNode(head, pos) {
  let current = head;
  let previous = null;
  let i = 0;

  if (pos === 0) {
    current = current.next;
    head = current;
    return head;
  } else {
    while (i < pos) {
      previous = current;
      current = current.next;
      i++;
    }
    current = current.next;
    previous.next = current;
    return head;
  }
}
