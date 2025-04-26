function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

function addTwoNumbers(l1, l2, carry = 0) {
  // 모두 null이고 자리올림도 없으면 종료
  if (!l1 && !l2 && carry === 0) return null;

  const x = l1 ? l1.val : 0;
  const y = l2 ? l2.val : 0;
  const sum = x + y + carry;
  const newNode = new ListNode(sum % 10);

  // 다음 자리수로 재귀 호출
  newNode.next = addTwoNumbers(
    l1 ? l1.next : null,
    l2 ? l2.next : null,
    Math.floor(sum / 10)
  );

  return newNode;
}
