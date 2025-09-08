import LinkedList from "./models/linked-list.js";

const list = new LinkedList();
list.append("fish");
list.prepend("Tortoise");
list.append("dragonfly");
console.log(list.toString());
console.log(list.tail());
