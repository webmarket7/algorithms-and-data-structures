import { SinglyLinkedList } from './singly-linked-list';
import { SinglyLinkedListNode } from './singly-linked-list-node';


describe('SinglyLinkedList', () => {

    it('should create empty singly linked list', () => {
        const list = new SinglyLinkedList<number>();

        expect(list).toHaveProperty('length', 0);
        expect(list).toHaveProperty('head', undefined);
        expect(list).toHaveProperty('tail', undefined);
    });

    describe('test pushing new node', () => {
        let list: SinglyLinkedList<number>;

        it('should return updated singly linked list after pushing new node', () => {
            const list = new SinglyLinkedList<number>();

            expect(list.push(1)).toBeInstanceOf(SinglyLinkedList);
        });

        describe('test singly linked list with single element', () => {

            beforeAll(() => {
                list = new SinglyLinkedList<number>();
                list.push(1);
            });

            it('should contain single element after pushing first element into empty list', () => {
                expect(list.length).toEqual(1);
            });

            it('should have head equal to the node with same value', () => {
                expect(list.head).toBeInstanceOf(SinglyLinkedListNode);
                expect(list.head).toHaveProperty('value', 1);
            });

            it('should have tail equal to the head', () => {
                expect(list.tail).toEqual(list.head);
            })
        });

        describe('test singly linked list with two elements', () => {

            beforeAll(() => {
                list = new SinglyLinkedList<number>();
                list.push(1);
                list.push(2);
            });

            it('should contain two elements after pushing second element', () => {
                expect(list.length).toEqual(2);
            });

            it('should have tail equal to the node with same value', () => {
                expect(list.tail).toBeInstanceOf(SinglyLinkedListNode);
                expect(list.tail).toHaveProperty('value', 2);
            });

            it('should have head pointing to the tail', () => {
                expect(list.head).toHaveProperty('next', list.tail);
            });
        });
    });

    describe('test popping existing node', () => {
        let list: SinglyLinkedList<number>;
        let popped: SinglyLinkedListNode<number> | undefined;

        it('should return undefined if singly linked list is empty', () => {
            list = new SinglyLinkedList();
            popped = list.pop();

            expect(popped).toEqual(undefined);
            expect(list.length).toEqual(0);
        });

        describe('test singly linked list with single node', () => {

            beforeAll(() => {
                list = new SinglyLinkedList<number>();
                list.push(1);
                popped = list.pop();
            });

            it('should make list empty', () => {
                expect(list).toHaveProperty('length', 0);
                expect(list).toHaveProperty('head', undefined);
                expect(list).toHaveProperty('tail', undefined);
            });

            it('should return popped node', () => {
                expect(popped).toBeInstanceOf(SinglyLinkedListNode);
                expect(popped).toHaveProperty('value', 1);
            });
        });

        describe('test singly linked list with two elements', () => {

            beforeAll(() => {
                list = new SinglyLinkedList<number>();
                list.push(1);
                list.push(2);
                popped = list.pop();
            });

            it('should decrement list length', () => {
                expect(list).toHaveProperty('length', 1);
            });

            it('should return popped node', () => {
                expect(popped).toBeInstanceOf(SinglyLinkedListNode);
                expect(popped).toHaveProperty('value', 2);
            });

            it('should remove last node and set tail to the pre-last node', () => {
                const tail = list.tail;
                expect(tail).toBeInstanceOf(SinglyLinkedListNode);
                expect(tail).toHaveProperty('value', 1);
            });
        });

        describe('test singly linked list with three elements', () => {

            beforeAll(() => {
                list = new SinglyLinkedList<number>();
                list.push(1);
                list.push(2);
                list.push(3);
                popped = list.pop();
            });

            it('should decrement list length', () => {
                expect(list).toHaveProperty('length', 2);
            });

            it('should return popped node', () => {
                expect(popped).toBeInstanceOf(SinglyLinkedListNode);
                expect(popped).toHaveProperty('value', 3);
            });

            it('should remove last node and set tail to the pre-last node', () => {
                const tail = list.tail;
                expect(tail).toBeInstanceOf(SinglyLinkedListNode);
                expect(tail).toHaveProperty('value', 2);
            });
        });
    });

    describe('test unshifting new node', () => {
        let list: SinglyLinkedList<number>;

        it('should return updated singly linked list after unshifting new node', () => {
            const list = new SinglyLinkedList<number>();

            expect(list.unshift(1)).toBeInstanceOf(SinglyLinkedList);
        });

        describe('test singly linked list with single element', () => {

            beforeAll(() => {
                list = new SinglyLinkedList<number>();
                list.unshift(1);
            });

            it('should contain single element after pushing first element into empty list', () => {
                expect(list.length).toEqual(1);
            });

            it('should have head equal to the node with same value', () => {
                expect(list.head).toBeInstanceOf(SinglyLinkedListNode);
                expect(list.head).toHaveProperty('value', 1);
            });

            it('should have tail equal to the head', () => {
                expect(list.tail).toEqual(list.head);
            })
        });

        describe('test singly linked list with two elements', () => {

            beforeAll(() => {
                list = new SinglyLinkedList<number>();
                list.unshift(2);
                list.unshift(1);
            });

            it('should contain two elements after pushing second element', () => {
                expect(list.length).toEqual(2);
            });

            it('should have head equal to the node with same value', () => {
                expect(list.head).toBeInstanceOf(SinglyLinkedListNode);
                expect(list.head).toHaveProperty('value', 1);
            });

            it('should have head pointing to the tail', () => {
                expect(list.head).toHaveProperty('next', list.tail);
            });
        });
    });

    describe('test shifting existing node', () => {
        let list: SinglyLinkedList<number>;
        let shifted: SinglyLinkedListNode<number> | undefined;

        it('should return undefined if singly linked list is empty', () => {
            list = new SinglyLinkedList();
            shifted = list.shift();

            expect(shifted).toEqual(undefined);
            expect(list.length).toEqual(0);
        });

        describe('test singly linked list with single node', () => {

            beforeAll(() => {
                list = new SinglyLinkedList<number>();
                list.push(1);
                shifted = list.shift();
            });

            it('should make list empty', () => {
                expect(list).toHaveProperty('length', 0);
                expect(list).toHaveProperty('head', undefined);
                expect(list).toHaveProperty('tail', undefined);
            });

            it('should return shifted node', () => {
                expect(shifted).toBeInstanceOf(SinglyLinkedListNode);
                expect(shifted).toHaveProperty('value', 1);
            });
        });

        describe('test singly linked list with two elements', () => {

            beforeAll(() => {
                list = new SinglyLinkedList<number>();
                list.push(1);
                list.push(2);
                shifted = list.shift();
            });

            it('should decrement list length', () => {
                expect(list).toHaveProperty('length', 1);
            });

            it('should return popped node', () => {
                expect(shifted).toBeInstanceOf(SinglyLinkedListNode);
                expect(shifted).toHaveProperty('value', 1);
            });

            it('should remove first node and set head to next node', () => {
                const head = list.head;

                expect(head).toBeInstanceOf(SinglyLinkedListNode);
                expect(head).toHaveProperty('value', 2);
            });
        });
    });

    describe('test getting existing node by index', () => {

        it('should return undefined if singly linked list is empty', () => {
            const list = new SinglyLinkedList();

            expect(list.get(0)).toEqual(undefined);
        });

        it('should return undefined if index is negative', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            expect(list.get(-1)).toEqual(undefined);
        });

        it('should return node by its index', () => {
            const list = new SinglyLinkedList();

            list.push(1);
            list.push(2);

            const firstNode = list.get(0);
            expect(firstNode).toBeInstanceOf(SinglyLinkedListNode);
            expect(firstNode).toHaveProperty('value', 1);

            const secondNode = list.get(1);
            expect(secondNode).toBeInstanceOf(SinglyLinkedListNode);
            expect(secondNode).toHaveProperty('value', 2);
        })
    });

    describe('test setting node at specific index', () => {

        it('should return false if singly linked list is empty', () => {
            const list = new SinglyLinkedList();

            expect(list.set(0, 1)).toEqual(false);
        });

        it('should return false if index is negative', () => {
            const list = new SinglyLinkedList();

            list.push(1);

            expect(list.set(-1, 2)).toEqual(false);
        });

        it('should return true and update value of node found at specific index', () => {
            const list = new SinglyLinkedList();

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

        describe('test edge cases with invalid inputs', () => {
            let list: SinglyLinkedList<number>;

            beforeEach(() => {
                list = new SinglyLinkedList<number>();
                list.push(1);
            });

            it('should return false if index is negative', () => {
                expect(list.insert(-1, 2)).toEqual(false);
            });

            it('should return false if index is bigger than list length', () => {
                expect(list.insert(2, 2)).toEqual(false);
            });
        });

        describe('test cases with valid inputs', () => {
            let list: SinglyLinkedList<number>;

            beforeEach(() => {
                list = new SinglyLinkedList<number>();
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
                list.push(4);

                expect(list.insert(1, 2)).toEqual(true);
                expect(list.length).toEqual(4);

                const insertedNode = list.get(1);

                expect(insertedNode).toBeInstanceOf(SinglyLinkedListNode);
                expect(insertedNode).toHaveProperty('value', 2);
                expect((insertedNode as SinglyLinkedListNode<number>).next).toHaveProperty('value', 3);
                expect((list.head as SinglyLinkedListNode<number>).next).toEqual(insertedNode);
            });
        });
    });

    describe('test removing existing node at specific index', () => {

        describe('test edge cases with invalid inputs', () => {
            let list: SinglyLinkedList<number>;

            it('should return undefined if the list is empty', () => {
                list = new SinglyLinkedList<number>();

                expect(list.remove(0)).toEqual(undefined);
            });

            beforeEach(() => {
                list = new SinglyLinkedList<number>();
                list.push(1);
            });

            it('should return undefined if index is negative', () => {
                expect(list.remove(-1)).toEqual(undefined);
            });

            it('should return undefined if index is bigger than list length', () => {
                expect(list.remove(2)).toEqual(undefined);
            });
        });

        describe('test cases with valid inputs', () => {
            let list: SinglyLinkedList<number>;

            beforeEach(() => {
                list = new SinglyLinkedList<number>();
            });

            it('should return removed node and shift the list if index equals zero', () => {
                list.push(1);
                const head = list.head;

                expect(list.remove(0)).toEqual(head);
                expect(list.length).toEqual(0);
            });

            it('should return removed node and pop the list if last index is passed in', () => {
                list.push(1);
                list.push(2);

                const tail = list.tail;

                expect(list.remove(1)).toEqual(tail);
                expect(list.length).toEqual(1);
                expect(list.tail).toHaveProperty('value', 1);
            });

            it('should remove node at specified index and return that node', () => {
                list.push(1);
                list.push(2);
                list.push(3);

                const nodeToBeRemoved = list.get(1);

                expect(list.remove(1)).toEqual(nodeToBeRemoved);
                expect(list.length).toEqual(2);
                expect((list.head as SinglyLinkedListNode<number>).next).toEqual(list.tail);
            });
        });
    });

    describe('test reversing list', () => {
        it('should return same list if we attempt to reverse empty list', () => {
            const list = new SinglyLinkedList<number>();

            expect(list.reverse()).toEqual(list);
        });

        it('should return reversed list if we attempt to reverse non-empty list', () => {
            const list = new SinglyLinkedList<number>();
            list.push(1);
            list.push(2);
            list.push(3);
            list.push(4);

            const reversed = list.reverse();
            let curr = reversed.head;
            let i = 0;

            while ((curr as SinglyLinkedListNode<number>).next) {
                expect(curr).toHaveProperty('value', 4 - i);
                curr = (curr as SinglyLinkedListNode<number>).next;
                i++;
            }
        });
    });
});
