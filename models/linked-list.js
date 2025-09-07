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
  prepend(value){}
  size(){}
  head(){}
  tail(){};
  at(){};
  pop(){};
  contains(){};
  find(){};
  toString(){};
  insertAt(value,index){};
  removeAt(index){};
}
