# Linked List

This project provides a custom implementation of a **Linked List** data structure in JavaScript.  
It includes a `LinkedList` class for managing nodes and a `Node` class for representing individual elements.

---

## Features

- **Append**: Add a node to the end of the list.
- **Prepend**: Add a node to the beginning of the list.
- **Size**: Keep track of the number of nodes.
- **Head & Tail**: Access the first and last elements.
- **At(index)**: Retrieve the node at a given position.
- **Pop**: Remove the last element.
- **Contains(value)**: Check if a value exists in the list.
- **Find(value)**: Get the index of a value.
- **toString()**: Represent the list in string format.
- **InsertAt(value, index)**: Insert a node at a given index.
- **RemoveAt(index)**: Remove a node from a given index.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/muktarkabir/linked-list.git
cd linked-list
```

## Usage

```js
import LinkedList from "./models/linked-list.js";

const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);

console.log(list.toString());
// Output: ( 5 ) -> ( 10 ) -> ( 20 ) ->  null

console.log(list.contains(10)); // true
console.log(list.find(20)); // 2

list.insertAt(15, 2);
console.log(list.toString());
// Output: ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) ->  null

list.removeAt(1);
console.log(list.toString());
// Output: ( 5 ) -> ( 15 ) -> ( 20 ) ->  null
```

## Sample Input/Output

### Adding and Removing

```js
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.toString());
// ( 1 ) -> ( 2 ) -> ( 3 ) ->  null

list.pop();
console.log(list.toString());
// ( 1 ) -> ( 2 ) ->  null
```

### Searching

```js
list.contains(2); // true
list.find(3); // null
```
