// piece of data - val
// reference of next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let first = new Node('Hi');
first.next = new Node('there');
first.next.next = new Node('how');
first.next.next.next = new Node('are');
first.next.next.next.next = new Node('you');

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // value를 인자로 받음
  // value를 이용하여 새로운 노드를 생성
  // list에 head가 없다면 head와 tail을 새로 생성한 노드로 설정
  // 그렇지 않다면 tail의 next에 새로 생성한 노드를 설정
  // length 증가
  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;

    return this;
  }

  // 리스트가 비어 있으면 undefined 반환
  // tail에 접근할 때까지 반복
  // 마지막에서 두 번째 노드의 next를 null로 재할당
  // 마지막에서 두 번째 노드를 tail로 설정
  // 리스트 length -1
  // 제거한 노드 반환
  pop() {
    if (this.length === 0) {
      this.head = null;
      this.tail = nul;

      return undefined;
    }

    let pre;
    let temp = this.head;

    while (temp) {
      if (temp.next === null) {
        pre.next = null;
        this.tail = pre;
        this.length--;

        return temp;
      }

      pre = temp;
      temp = temp.next;
    }
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const currHead = this.head;
    this.head = currHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currHead;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length || !typeof index === "number") {
      return null;
    }

    let counter = 0;
    let target = this.head;

    while (counter < this.length) {
      if (counter === index) {
        return target;
      }
      target = target.next;
      counter++;
    }
  }

  set(index, value) {
    let node = this.get(index);

    if (!node) {
      return false;
    }

    node.val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(value);
    }
    if (index === 0) {
      return !!this.unshift(value);
    }

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    newNode.next = nextNode;
    prevNode.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop()
    }

    if (index === 0) {
      return this.shift()
    }

    let prevNode = this.get(index - 1);
    const targetNode = prevNode.next;

    prevNode.next = targetNode.next;
    this.length--;

    return targetNode;
  }

  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  reverse() {
    let node = this.head;

    this.head = this.tail
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }

    return this;
  }
}

let list = new SinglyLinkedList();
console.log(list.push('HELLO'));
console.log(list.push('GOODBYE'));
console.log(list.push('HIHI'));

console.log(list.insert(0, 'ZUBETCHA'))
