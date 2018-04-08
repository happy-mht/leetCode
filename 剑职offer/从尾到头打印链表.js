/**
 * 题目：输入一个列表的头结点，从尾到头打印出每个节点的值
 * 不能改变原列表的结构，后进先出，可以使用栈实现
 * @param {linkNode} head
 */

function printLink(head) {
    if (!head) return; /*head 为null的情况*/
    let stack = [head.elem];
    let current = head;
    while (current.next) {
        stack.push(current.next.elem);
        current = current.next
    }
    while (stack.length) {
        console.log(stack.pop())
    }
}




class LinkNode {
    constructor(elem, next) {
        this.elem = elem;
        this.next = null;
    }
}
class Link {
    constructor() {
        this.head = new LinkNode('head')
    }

    find(item) {
        let currentNode = this.head;
        while (currentNode && currentNode.elem != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(newElem, item) {
        let newNode = new LinkNode(newElem)
        let current = this.find(item) || this.head
        newNode.next = current.next;
        current.next = newNode
    }

    delete(item) {
        let current = this.head;

        if (current.elem == item) {
            this.head = this.head.next
        }
        if (current.next && current.next.elem == item) {
            let delNode = current.next;
            current.next = current.next.next;
            return delNode;
        }
    }
}
let link = new Link()
printLink(link.head)