class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size = 0;
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      temp.nextNode = new Node(value);
    }
    this.size++;
  }
  prepend(value) {
    let temp = this.head;
    this.head = new Node(value, temp);
    this.size++;
  }
   get size() {
    return this.size;
  }
  head() {
    return this.head;
  }
  tail() {
    if (!this.head.nextNode) {
      return this.head;
    } else {
      let temp = this.head;
      while (temp.nextNode) {
        temp = temp.nextNode;
      }
      return temp;
    }
  }
  at(index) {
    if (index >= this.size || index < 0) {
      throw new Error("Index out of range");
    } else {
      let count = 0;
      let temp = this.head;
      while (count < index) {
        temp = temp.nextNode;
        count++;
      }
      return temp;
    }
  }
   pop() {
    if (!this.head.nextNode) {
      this.head = null;
      this.size = 0;
    } else {
      let temp = this.head;
      while (temp.nextNode.nextNode) {
        temp = temp.nextNode;
      }

      temp.nextNode = null;
      this.size--;
    }
  }
   contains(value) {
    let temp = this.head;
    while (temp) {
      if (temp.value == value) return true;
      temp = temp.nextNode;  
    }
    return false;
  }
  find(value) {
    let temp = this.head;
    let count = 0;
    while (temp) {
        if (temp.value == value) return count;
        count++;
        temp = temp.nextNode;
    }
    return null;
  }
  toString(){};
  insertAt(value,index){};
  removeAt(index){};
}
