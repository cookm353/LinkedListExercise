class Node {
    constructor(val, previous=null, next=null) {
        this.val = val
        this.previous = previous
        this.next = next
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)

        if (this.length === 0) {
            this.head = newNode
        } else {
            newNode.previous = this.tail
        }
        
        this.tail = newNode
        this.tail.next = newNode
        this.length++
    }

    pop() {
        if (this.length === 0) {
            return new Error
        } 
        
        const node = this.tail
        this.tail = node.previous
        node.previous = null
        this.tail.next = null

        if (this.length === 1) {
            this.head = null
            this.tail = null
        }

        this.length--
        return node
    }

    unshift(val) {
        const newNode = new Node(val)
        
        if (this.length === 0) {
            this.tail = newNode
        }
        
        newNode.next = this.head
        this.head.previous = newNode
        this.head = newNode
        this.length++
    }

    shift() {
        if (this.length === 0) {
            return new Error
        }

        const node = this.head
        this.head = node.next
        this.head.previous = null
        node.next = null

        if (this.length === 1) {
            this.tail = this.head
        }

        this.length--
        return node
    }

}