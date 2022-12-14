class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    if (this.head) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head || !this.length) {
      return undefined;
    }

    let oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    if (this.length > 1) {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;

    return oldTail;
  }

  shift() {
    if (!this.head || !this.length) {
      return undefined;
    }

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    if (this.length > 1) {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.length > 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    // 유효하지 않은 인덱스 
    if (index < 0 || index >= list.length) {
      return null;
    }

    if (typeof index !== 'number') {
      throw new Error('매개변수는 number 타입만 받을 수 있습니다')
    }

    const lessThanHalf = index <= list.length / 2;
    let count = lessThanHalf ? 0 : this.length - 1;
    let current = lessThanHalf ? this.head : this.tail;

    if (lessThanHalf) {
      while (count !== index) {
        current = current.next;
        count++;
      }

      return current;
    }

    if (!lessThanHalf) {
      while (count !== index) {
        current = current.prev;
        count--;
      }

      return current;
    }
  }

  set(index, value) {
    let target = this.get(index);

    if (!target) {
      return false;
    }

    target.val = value;
    return true;
  }

  insert(index, value) {
    // 유효하지 않은 인덱스
    if (typeof index !== "number") {
      throw new Error("매개변수는 number 타입만 받을 수 있습니다");
    }

    if (index < 0 || index > list.length) {
      return false;
    }
 
    if (index === 0) {
      return !!this.unshift(value);
    }

    if (index === this.length) {
      return !!this.push(value);
    }

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    newNode.next = nextNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    prevNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    // 유효하지 않은 인덱스
    if (typeof index !== "number") {
      throw new Error("매개변수는 number 타입만 받을 수 있습니다");
    }

    if (index < 0 || index >= list.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    let prevNode = this.get(index - 1);
    let targetNode = prevNode.next;

    targetNode.next.prev = prevNode;
    prevNode.next = targetNode.next;

    targetNode.prev = null;
    targetNode.next = null;
    this.length--;

    return targetNode;
  }
}

const list = new DoublyLinkedList();
list.push('One');
list.push('Two');
list.push('Three');

console.log(list);

list.insert(1, 'HELLO')

console.log(list)