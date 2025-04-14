/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const stack1: number[] = [];
    const stack2: number[] = [];

    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;
    let result: ListNode | null = null;

    while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
        const sum = (stack1.pop() ?? 0) + (stack2.pop() ?? 0) + carry;
        carry = Math.floor(sum / 10);
        const newNode = new ListNode(sum % 10);
        newNode.next = result;
        result = newNode;
    }

    return result;
}
