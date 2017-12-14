'use strict';
const LinkedList = require('./linked-list');


const linkedList = new LinkedList;
const linkList2 = new LinkedList;

linkedList.insert(0, 'A');
linkedList.insert(1, 'B');
linkedList.insert(2, 'C');
linkedList.insert(3, 'D');
linkedList.insert(4, 'E');
linkedList.insert(5, 'F');
linkedList.insert(6, 'G');
linkedList.insert(7, 'H');
linkedList.insert(8, 'I');
linkedList.insert(9, 'J');
linkedList.insert(10, 'K');


//// EXERCISE 2

// displays the linked list
function printList(linkedList) {
	let currentNode = linkedList.head;
	while (currentNode !== null) {
		console.log(currentNode.value);
		currentNode = currentNode.next;
	}
}


// printList(linkedList)

function listLength(linkedList){
	let i = 0;
	let currentNode = linkedList.head;
	while (currentNode !== null) {
		i++;
		currentNode = currentNode.next;
	}
	return i;
}

// console.log(listLength(linkedList, 'listLength'))

function isEmpty(linkedList) {
	if (linkedList.head === null){
		return true;
	}
	else {
		return false;
	}
}


// console.log(isEmpty(linkList2))


// findPrevious: finds the node before the item you are looking for
function findPrevious(linkedList, value) {
	let currentNode = linkedList.head;

	while (currentNode.next.value !== value) {
		currentNode = currentNode.next;
	}

	return currentNode.value;
}

// console.log(findPrevious(linkedList, 'G'));

function findLast(linkedList) {
	let currentNode = linkedList.head;
    
	while (currentNode.next !== null) {
		currentNode = currentNode.next;
	}
    
	return currentNode.value;
}

// console.log(findLast(linkedList));


/// EXERCISE 3

function findMiddle(linkedList) {
	let fast = linkedList.head;
	let slow = linkedList.head;

	while (fast.next !== null && fast.next.next !== null) {
		fast = fast.next.next;
		slow = slow.next;
	}

	return slow.value;
}

// console.log(findMiddle(linkedList));


/// EXERCISE 4

function findThirdFromEnd(linkedList){
	let currentNode = linkedList.head;
	while (currentNode.next.next.next !== null) {
		currentNode = currentNode.next;
	}
    
	return currentNode.value;
}

console.log(findThirdFromEnd(linkedList));

/// EXERCISE 5



/// EXERCISE 6



/// EXERCISE 7



/// EXERCISE 8