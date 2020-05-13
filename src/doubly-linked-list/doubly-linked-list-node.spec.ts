import { DoublyLinkedListNode } from './doubly-linked-list-node';

describe('DoublyLinkedListNode', () => {
    let node: DoublyLinkedListNode<number>;

    beforeEach(() => {
        node = new DoublyLinkedListNode(2);
    });

    it('should instantiate node with custom value', () => {
        expect(node).toHaveProperty('value', 2);
        expect(node).toHaveProperty('next', undefined);
        expect(node).toHaveProperty('previous', undefined);
    });

    it('should allow to set pointer to the previous value', () => {
        node.previous = new DoublyLinkedListNode(1);
        const previous = node.previous;
        previous.next = node;

        expect(previous).toBeInstanceOf(DoublyLinkedListNode);
        expect(previous).toHaveProperty('value', 1);
        expect(previous).toHaveProperty('previous', undefined);
        expect(previous).toHaveProperty('next', node);
    });

    it('should allow to set pointer to the next value', () => {
        node.next = new DoublyLinkedListNode(3);
        const next = node.next;
        next.previous = node;

        expect(next).toBeInstanceOf(DoublyLinkedListNode);
        expect(next).toHaveProperty('value', 3);
        expect(next).toHaveProperty('previous', node);
        expect(next).toHaveProperty('next', undefined);
    });

    it('should allow to set new node value', () => {
        expect(node).toHaveProperty('value', 2);
        node.value = 3;
        expect(node).toHaveProperty('value', 3);
    });
});
