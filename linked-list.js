/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
    } else if (this.tail) {
      this.tail.next = newNode
    }
    
    this.tail = newNode
    this.length ++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.tail = newNode
    } else {
      newNode.next = this.head
    }

    this.head = newNode
    this.length ++
  }

  /** pop(): return & remove last item. */

  pop() {
    let tail
    
    if (!this.tail) {
      throw new ReferenceError
    } else if (this.head === this.tail) {
      tail = this.tail
      this.head = null
      this.tail = null
      this.length --
      return tail.val
    }
    
    let currNode = this.head
    this.length --

    while (currNode) {
      if (currNode.next === this.tail) {
        this.tail = currNode
        let tail = currNode.next
        this.tail.next = null
        return tail.val
      }
      currNode = currNode.next
    }
    
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error
    }
    
    const headNode = this.head
    
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = headNode.next
    }
    
    this.length--
    headNode.next = null
    return headNode.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currNode = this.head
    
    for (let i = 0; i < idx; i++) {
      try {
        currNode = currNode.next
      } catch (error) {
        throw error
      }
    }

    return currNode.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.head

    for (let i = 0; i < idx; i++) {
      try {
        currNode = currNode.next
      } catch (error) {
        throw error
      }
    }

    currNode.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {   
    if (idx === 0) {
      this.unshift(val)
    } else if (idx === this.length) {
      this.push(val)
    } else {
      console.log('foo')
      let currNode = this.head
      let newNode = new Node(val)
  
      for (let i = 0; i < idx -1; i++) {
          currNode = currNode.next
      }
  
      newNode.next = currNode.next
      currNode.next = newNode
      this.length++
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length) {
      throw new Error
    } else if (this.length = 1) {
      this.head = null
      this.tail = null
    } else {
        
      let currNode = this.head
      
      for (let i = 0; i < idx - 1; i++) {
        currNode = currNode.next
      }
      
      currNode.next = currNode.next.next
    }
    this.length --
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0
    
    let sum = 0
    let currNode = this.head

    while(currNode) {
      sum += currNode.val
      currNode = currNode.next
    }

    return sum/this.length
  }
}

module.exports = LinkedList;