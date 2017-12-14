'use strict'
const LinkedList = require('./linked-list')


const linkedList = new LinkedList
const linkList2 = new LinkedList

linkedList.insert(0, 'A')
linkedList.insert(1, 'B')
linkedList.insert(2, 'C')
linkedList.insert(3, 'D')



// displays the linked list
function printList(linkedList) {
    let currentNode = linkedList.head;
    while (currentNode !== null) {
        console.log(currentNode.value)
        currentNode = currentNode.next
    }
}


// printList(linkedList)

function listLength(linkedList){
    let i = 0;
    let currentNode = linkedList.head;
    while (currentNode !== null) {
        i++
        currentNode = currentNode.next
    }
    return i
}

// console.log(listLength(linkedList, 'listLength'))

function isEmpty(linkedList) {
    if (linkedList.head === null){
        return true
    }
    else {
        return false
    }
}


// console.log(isEmpty(linkList2))


// findPrevious: finds the node before the item you are looking for
function findPrevious(linkedList, index){
    return linkedList.get(index - 1)
}

// console.log(findPrevious(linkedList, 3))

function findLast(linkedList){
    let i = 0;
    let currentNode = linkedList.head;
    while (currentNode !== null) {
        i++
        currentNode = currentNode.next
    }
    return linkedList.get(i - 1)
}

console.log(findLast(linkedList))