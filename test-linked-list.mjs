import Node from "./node.mjs";
import LinkedList from "./linked-list.mjs";

let node0 = new Node();
node0.data = "father"; // father

let node1 = new Node();
node1.data = "First Born";

let node2 = new Node();
node2.data = "Second Born";

let node3 = new Node();
node3.data = "Third Born";

let node4 = new Node();
node4.data = "Fourth Born";

let node5 = new Node();
node5.data = "Fifth Born";

node0.pointerToNext = node1;

node1.pointerToNext = node2;

node2.pointerToNext = node3;

node3.pointerToNext = node4;

node4.pointerToNext = node5;

let current = node0;

do {
    console.log(current.data);
    console.log('   |   ');
    console.log('   V   ');

    current = current.pointerToNext;
}
while(current);

