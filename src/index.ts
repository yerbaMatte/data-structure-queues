type T = number | string;
type node = _Node<T> | null;

class _Node<T> {
  value: T;
  next: _Node<T> | null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  first: node;
  last: node;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val: T) {
    const newNode = new _Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    const curr = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first!.next;
  }
}

const myNewNode = new _Node('hello!');
