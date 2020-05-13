import { DoublyLinkedListNode } from './doubly-linked-list-node';


export class DoublyLinkedList<T> {
    private _length = 0;
    private _head: DoublyLinkedListNode<T> | undefined;
    private _tail: DoublyLinkedListNode<T> | undefined;

    get head(): DoublyLinkedListNode<T> | undefined {
        return this._head;
    }

    get tail(): DoublyLinkedListNode<T> | undefined {
        return this._tail;
    }

    get length(): number {
        return this._length;
    }

    push(value: T): DoublyLinkedList<T> {
        const newNode = new DoublyLinkedListNode<T>(value);

        if (!this.length) {
            this._setContent(newNode);
        } else {
            const tail = this.tail as DoublyLinkedListNode<T>;

            newNode.previous = tail;
            tail.next = newNode;
            this._tail = newNode;
        }

        this._length++;

        return this;
    }

    pop(): DoublyLinkedListNode<T> | undefined {
        if (this.length) {
            const tail = this.tail as DoublyLinkedListNode<T>;

            if (this.length === 1) {
                this._setContent();
            } else {
                const preLast = tail.previous as DoublyLinkedListNode<T>;

                tail.previous = undefined;
                preLast.next = undefined;
                this._tail = preLast;
            }

            this._length--;

            return tail;
        }
    }

    unshift(value: T): DoublyLinkedList<T> {
        const newNode = new DoublyLinkedListNode<T>(value);

        if (!this.length) {
            this._setContent(newNode);
        } else if (this.head) {
            newNode.next = this.head;
            this.head.previous = newNode;
            this._head = newNode;
        }

        this._length++;

        return this;
    }

    shift(): DoublyLinkedListNode<T> | undefined {
        if (this.length) {
            const head = this.head as DoublyLinkedListNode<T>;

            if (this.length === 1) {
                this._setContent();
            } else {
                const next = head.next as DoublyLinkedListNode<T>;

                head.next = undefined;
                next.previous = undefined;
                this._head = next;
            }

            this._length--;

            return head;
        }
    }

    get(index: number): DoublyLinkedListNode<T> | undefined {
        if (this._hasIndex(index)) {
            const start = index <= Math.floor(this.length / 2);
            let i = 0;
            let curr = this.head;
            let direction = 1;
            let pointer: 'next' | 'previous' = 'next';

            if (!start) {
                i = this.length - 1;
                curr = this.tail;
                direction = -1;
                pointer = 'previous';
            }

            while (i * direction < index * direction && curr) {
                curr = curr[pointer];
                i += direction;
            }

            return curr;
        }
    }

    set(index: number, value: T): boolean {
        const node = this.get(index);

        if (node) {
            node.value = value;

            return true;
        }

        return false;
    }

    insert(index: number, value: T): boolean {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            this.unshift(value);
        } else if (index === this.length) {
            this.push(value);
        } else {
            const newNode = new DoublyLinkedListNode<T>(value);
            const prev = this.get(index - 1) as DoublyLinkedListNode<T>;
            const next = prev.next as DoublyLinkedListNode<T>;

            prev.next = newNode;
            newNode.previous = prev;
            newNode.next = next;
            next.previous = newNode;
            this._length++;
        }

        return true;
    }

    remove(index: number): DoublyLinkedListNode<T> | undefined {
        if (this.length) {
            const lastIndex = this.length - 1;

            if (index === 0) {
                return this.shift();
            } else if (index === lastIndex) {
                return this.pop();
            } else if (index > 0 && index < lastIndex) {
                const prev = this.get(index - 1) as DoublyLinkedListNode<T>;
                const removed = prev.next as DoublyLinkedListNode<T>;
                const next = removed.next as DoublyLinkedListNode<T>;

                prev.next = next;
                next.previous = prev;
                removed.previous = undefined;
                removed.next = undefined;
                this._length--;

                return removed;
            }
        }
    }

    reverse(): DoublyLinkedList<T> {
        return this;
    }

    private _hasIndex(index: number): boolean {
        return !!(this.length && index >= 0 && index < this.length);
    }

    private _setContent(content?: DoublyLinkedListNode<T> | undefined): void {
        this._head = content;
        this._tail = content;
    }
}
