const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var fillGaps = function (head) {
  let col = head;
  let mov = head;
  col = col.next;

  while (col != null) {
    if (col.data - mov.data == 1) {
      mov = col;
      col = col.next;
    } else {
      let node = new LinkedListNode(mov.data + 1);
      node.next = col;
      mov.next = node;
      mov = node;
    }
  }
  return head;
};
