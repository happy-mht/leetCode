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
export { Link }