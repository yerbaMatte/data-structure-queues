class _Node<T> {
  value: T;
  next: _Node<T> | null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

const myNewNode = new _Node('hello!');
