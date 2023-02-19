const ListNode = class {
  constructor(nodeData) {
    this.val = nodeData;
    this.next = null;
  }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = new ListNode(-1);
  let dummy = result;

  while (l1 || l2 || carry) {
    let l1val = l1 ? l1.val : 0;
    let l2val = l2 ? l2.val : 0;

    let nextDigit = (l1val + l2val + carry) % 10;
    result.next = new ListNode(nextDigit);
    result = result.next;

    carry = Math.floor((l1val + l2val + carry) / 10);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return dummy.next;
};
