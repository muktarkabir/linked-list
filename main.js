import LinkedList from "./models/linked-list.js";

const list = new LinkedList();
list.append("fish");
list.prepend("Tortoise");
list.append("dragonfly");
list.append("housefly");
console.log(list.toString());
// console.log(list.tail());
list.insertAt("snake", 1);
console.log(list.toString());
list.insertAt("puppy", 3);
console.log(list.toString());


