import { DoublyLinkedList } from './doubly-linked-list';
import { DoublyLinkedListNode } from './doubly-linked-list-node';


describe('DoublyLinkedList', () => {
    let list: DoublyLinkedList<number>;

    beforeEach(() => {
        list = new DoublyLinkedList<number>();
    });

    it('should create empty doubly linked list', () => {
        expect(list).toHaveProperty('length', 0);
        expect(list).toHaveProperty('head', undefined);
        expect(list).toHaveProperty('tail', undefined);
    });

    describe('test pushing new node', () => {

        it('should return doubly linked list with a new node being head and tail if list was empty', () => {
            const newList = list.push(1);

            expect(newList.head).toBeInstanceOf(DoublyLinkedListNode);
            expect(newList.head).toHaveProperty('value', 1);
            expect(newList.tail).toBeInstanceOf(DoublyLinkedListNode);
            expect(newList.tail).toHaveProperty('value', 1);
            expect(newList.length).toEqual(1);
        });

        it('should return doubly linked list with a new node pushed to the end', () => {
            list.push(1);
            const newList = list.push(2);

            expect(newList.head).toBeInstanceOf(DoublyLinkedListNode);
            expect(newList.head).toHaveProperty('value', 1);
            expect(newList.head).toHaveProperty('next', newList.tail);
            expect(newList.tail).toBeInstanceOf(DoublyLinkedListNode);
            expect(newList.tail).toHaveProperty('value', 2);
            expect(newList.tail).toHaveProperty('previous', newList.head);
            expect(newList.length).toEqual(2);
        })
    });

    describe('test popping existing node', () => {

        it('should return undefined if doubly linked list was empty', () => {
            expect(list.pop()).toEqual(undefined);
        });

        it('should return popped tail and make doubly linked list empty if it had only one item', () => {
            list.push(1);
            const node = list.tail;

            expect(list.pop()).toEqual(node);
            expect(list).toHaveProperty('length', 0);
            expect(list).toHaveProperty('head', undefined);
            expect(list).toHaveProperty('tail', undefined);
        });

        it('should return popped tail without reference to the list and make prelast item the new tail without reference to the popped item', () => {
            list.push(1);
            list.push(2);

            const popped = list.pop();
            const tail = list.tail;

            expect(popped).toHaveProperty('value', 2);
            expect(popped).toHaveProperty('previous', undefined);
            expect(tail).toHaveProperty('value', 1);
            expect(tail).toHaveProperty('next', undefined);
            expect(list).toHaveProperty('length', 1);
        });
    });

    describe('test unshifting new node', () => {

        it('should return doubly linked list with a new node being head and tail if list was empty', () => {
            const newList = list.unshift(1);

            expect(newList.head).toBeInstanceOf(DoublyLinkedListNode);
            expect(newList.head).toHaveProperty('value', 1);
            expect(newList.tail).toBeInstanceOf(DoublyLinkedListNode);
            expect(newList.tail).toHaveProperty('value', 1);
            expect(newList.length).toEqual(1);
        });

        it('should return doubly linked list with a new node pushed to the end', () => {
            list.unshift(2);
            const newList = list.unshift(1);

            expect(newList.head).toBeInstanceOf(DoublyLinkedListNode);
            expect(newList.head).toHaveProperty('value', 1);
            expect(newList.head).toHaveProperty('next', newList.tail);
            expect(newList.tail).toBeInstanceOf(DoublyLinkedListNode);
            expect(newList.tail).toHaveProperty('value', 2);
            expect(newList.tail).toHaveProperty('previous', newList.head);
            expect(newList.length).toEqual(2);
        })
    });

    describe('test shifting existing node', () => {

        it('should return undefined if doubly linked list was empty', () => {
            expect(list.shift()).toEqual(undefined);
        });

        it('should return shifted head and make doubly linked list empty if it had only one item', () => {
            list.push(1);
            const node = list.head;

            expect(list.shift()).toEqual(node);
            expect(list).toHaveProperty('length', 0);
            expect(list).toHaveProperty('head', undefined);
            expect(list).toHaveProperty('tail', undefined);
        });

        it('should return shifted head without reference to the list and make second item the new head without reference to the popped item', () => {
            list.push(1);
            list.push(2);

            const shifted = list.shift();
            const head = list.head;

            expect(shifted).toHaveProperty('value', 1);
            expect(shifted).toHaveProperty('next', undefined);
            expect(head).toHaveProperty('value', 2);
            expect(head).toHaveProperty('previous', undefined);
            expect(list).toHaveProperty('length', 1);
        });
    });

    describe('test getting existing node by index', () => {

        it('should return undefined if doubly linked list is empty', () => {
            expect(list.get(0)).toEqual(undefined);
        });

        it('should return undefined if index is negative', () => {
            list.push(1);

            expect(list.get(-1)).toEqual(undefined);
        });

        it('should return node by its index', () => {
            list.push(1);
            list.push(2);
            list.push(3);
            list.push(4);
            list.push(5);

            const firstNode = list.get(0);
            expect(firstNode).toBeInstanceOf(DoublyLinkedListNode);
            expect(firstNode).toHaveProperty('value', 1);

            const fourthNode = list.get(3);
            expect(fourthNode).toBeInstanceOf(DoublyLinkedListNode);
            expect(fourthNode).toHaveProperty('value', 4);

            const lastNode = list.get(4);
            expect(lastNode).toBeInstanceOf(DoublyLinkedListNode);
            expect(lastNode).toHaveProperty('value', 5);
        });
    });

    describe('test setting node at specific index', () => {

        it('should return false if singly linked list is empty', () => {
            const list = new DoublyLinkedList();

            expect(list.set(0, 1)).toEqual(false);
        });

        it('should return false if index is negative', () => {
            const list = new DoublyLinkedList();

            list.push(1);

            expect(list.set(-1, 2)).toEqual(false);
        });

        it('should return true and update value of node found at specific index', () => {
            const list = new DoublyLinkedList();

            list.push(1);

            expect(list.set(0, 2)).toEqual(true);
            expect(list.head).toHaveProperty('value', 2);
            expect(list.tail).toHaveProperty('value', 2);

            list.push(3);

            expect(list.set(1, 4)).toEqual(true);
            expect(list.head).toHaveProperty('value', 2);
            expect(list.tail).toHaveProperty('value', 4);
        });
    });

    describe('test inserting new node at specific index', () => {

        it('should return false if index is negative', () => {
            list.push(1);
            expect(list.insert(-1, 2)).toEqual(false);
        });

        it('should return false if index is bigger than list length', () => {
            list.push(1);
            expect(list.insert(2, 2)).toEqual(false);
        });

        it('should return true and unshift the list with new node if singly linked list is empty', () => {
            expect(list.insert(0, 1)).toEqual(true);
            expect(list.length).toEqual(1);
            expect(list.head).toHaveProperty('value', 1);
        });

        it('should return true and push new node to the list if index equals list length', () => {
            list.push(1);
            expect(list.insert(1, 2)).toEqual(true);
            expect(list.length).toEqual(2);
            expect(list.tail).toHaveProperty('value', 2);
        });

        it('should return true and insert new node at specified index', () => {
            list.push(1);
            list.push(3);

            expect(list.insert(1, 2)).toEqual(true);
            expect(list.length).toEqual(3);

            const insertedNode = list.get(1) as DoublyLinkedListNode<number>;

            expect(insertedNode).toBeInstanceOf(DoublyLinkedListNode);
            expect(insertedNode).toHaveProperty('value', 2);
            expect(insertedNode.previous).toEqual(list.head);
            expect(insertedNode.next).toEqual(list.tail);
            expect((list.head as DoublyLinkedListNode<number>).next).toEqual(insertedNode);
            expect((list.tail as DoublyLinkedListNode<number>).previous).toEqual(insertedNode);
        });
    });

    describe('test removing existing node at specific index', () => {

        it('should return undefined if the list is empty', () => {
            expect(list.remove(0)).toEqual(undefined);
        });

        it('should return undefined if index is negative', () => {
            list.push(1);
            expect(list.remove(-1)).toEqual(undefined);
        });

        it('should return undefined if index is bigger than list length', () => {
            list.push(1);
            expect(list.remove(2)).toEqual(undefined);
        });

        it('should return removed node and shift the list if index equals zero', () => {
            list.push(1);

            const removed = list.remove(0);

            expect(removed).toHaveProperty('value', 1);
            expect(removed).toHaveProperty('next', undefined);
            expect(removed).toHaveProperty('previous', undefined);
            expect(list.length).toEqual(0);
        });

        it('should return removed node and pop the list if last index is passed in', () => {
            list.push(1);
            list.push(2);

            const removed = list.remove(1);

            expect(removed).toHaveProperty('value', 2);
            expect(removed).toHaveProperty('next', undefined);
            expect(removed).toHaveProperty('previous', undefined);
            expect(list.length).toEqual(1);
            expect(list.tail).toHaveProperty('value', 1);
        });

        it('should remove node at specified index and return that node', () => {
            list.push(1);
            list.push(2);
            list.push(3);

            const removed = list.remove(1);

            expect(removed).toHaveProperty('value', 2);
            expect(removed).toHaveProperty('next', undefined);
            expect(removed).toHaveProperty('previous', undefined);
            expect(list.length).toEqual(2);
            expect((list.head as DoublyLinkedListNode<number>).next).toEqual(list.tail);
            expect((list.tail as DoublyLinkedListNode<number>).previous).toEqual(list.head);
        });
    });

    describe('test reversing list', () => {
    });
});
