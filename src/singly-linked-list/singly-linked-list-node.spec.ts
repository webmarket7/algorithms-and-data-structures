import { SinglyLinkedListNode } from './singly-linked-list-node';


describe('SinglyLinkedListNode', () => {
    let node: SinglyLinkedListNode<number>;

    beforeEach(() => {
        node = new SinglyLinkedListNode(1);
    });

    it('should instantiate node with custom value', () => {
        expect(node).toHaveProperty('value', 1);
        expect(node).toHaveProperty('next', undefined);
    });

    it('should allow to set pointer to the next value', () => {
        node.next = new SinglyLinkedListNode(2);
        const next = node.next;

        expect(next).toBeInstanceOf(SinglyLinkedListNode);
        expect(next).toHaveProperty('value', 2);
        expect(next).toHaveProperty('next', undefined);
    });
});
