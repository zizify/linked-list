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

// console.log(findThirdFromEnd(linkedList));

/// EXERCISE 5

function reverseList(currentNode) {
	if (currentNode === null) {
		return null;
	}

	if (!currentNode.next) {
		return currentNode;
	}
    
	let nextNode = currentNode.next;
	currentNode.next = null;

	const reverseFromNext = reverseList(nextNode);
	nextNode.next = currentNode;
    
	return reverseFromNext;
}

// console.log(reverseList(linkedList.head));



/// EXERCISE 6
const cycleList = new LinkedList();
cycleList.insert(0, 1);
cycleList.insert(1, 4);
cycleList.insert(2, 6);
cycleList.insert(3, 3);
cycleList.insert(4, 3);
cycleList.insert(5, 3);

//Create a cycle in the list
cycleList.head.next.next = cycleList.head;

function inCycle(list){
	let slow = list.head;
	let fast = list.head;
    
	while(slow !== null && fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
        
		if (slow === fast) {
			console.log('Cyclical.');
			return;
		}
	}
	console.log('Linear.');
}

inCycle(cycleList);
inCycle(linkedList);


/// EXERCISE 7



/// EXERCISE 8