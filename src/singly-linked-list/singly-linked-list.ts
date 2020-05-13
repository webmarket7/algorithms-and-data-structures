import { SinglyLinkedListNode } from './singly-linked-list-node';

export class SinglyLinkedList<T> {
    private _length = 0;
    private _head: SinglyLinkedListNode<T> | undefined;
    private _tail: SinglyLinkedListNode<T> | undefined;

    get head(): SinglyLinkedListNode<T> | undefined {
        return this._head;
    }

    get tail(): SinglyLinkedListNode<T> | undefined {
        return this._tail;
    }

    get length(): number {
        return this._length;
    }

    push(value: T): SinglyLinkedList<T> {
        const newNode = new SinglyLinkedListNode<T>(value);

        if (!this.length) {
            this._setContent(newNode);
        } else if (this.tail) {
            this.tail.next = newNode;
            this._tail = newNode;
        }

        this._length++;

        return this;
    }

    pop(): SinglyLinkedListNode<T> | undefined {
        const tail = this.tail;

        if (this.length) {
            if (this.length > 1) {
                let curr = this.head;
                let newTail = curr;

                while ((curr as SinglyLinkedListNode<T>).next !== undefined) {
                    newTail = curr;
                    curr = (curr as SinglyLinkedListNode<T>).next;
                }

                (newTail as SinglyLinkedListNode<T>).next = undefined;
                this._tail = newTail;
            } else {
                this._setContent();
            }

            this._length--;
        }

        return tail;
    }

    unshift(value: T): SinglyLinkedList<T> {
        const newNode = new SinglyLinkedListNode<T>(value);

        if (!this.length) {
            this._setContent(newNode);
        } else if (this.head) {
            newNode.next = this.head;
            this._head = newNode;
        }

        this._length++;

        return this;
    }

    shift(): SinglyLinkedListNode<T> | undefined {
        const head = this.head;

        if (this.length) {
            if (this.length > 1) {
                this._head = (head as SinglyLinkedListNode<T>).next;
            } else {
                this._setContent();
            }

            this._length--;
        }

        return head;
    }

    get(index: number): SinglyLinkedListNode<T> | undefined {
        if (this._hasIndex(index)) {
            let i = 0;
            let curr = this.head;

            while (i < index && curr) {
                curr = curr.next;
                i++;
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
            const newNode = new SinglyLinkedListNode<T>(value);
            const prev = this.get(index - 1);

            newNode.next = (prev as SinglyLinkedListNode<T>).next;
            (prev as SinglyLinkedListNode<T>).next = newNode;
            this._length++;
        }

        return true;
    }

    remove(index: number): SinglyLinkedListNode<T> | undefined {
        if (this.length) {
            const lastIndex = this.length - 1;

            if (index === 0) {
                return this.shift();
            } else if (index === lastIndex) {
                return this.pop();
            } else if (index > 0 && index < lastIndex) {
                const prev = this.get(index - 1);
                const removed = (prev as SinglyLinkedListNode<T>).next as SinglyLinkedListNode<T>;

                (prev as SinglyLinkedListNode<T>).next = removed.next;
                this._length--;

                return removed;
            }
        }
    }

    reverse(): SinglyLinkedList<T> {
        const node: SinglyLinkedListNode<T> = this.head as SinglyLinkedListNode<T>;
        this._head = this.tail;
        this._tail = node;
        let next;
        let prev;

        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = next;
        }

        return this;
    }

    private _hasIndex(index: number): boolean {
        return !!(this.length && index >= 0 && index < this.length);
    }

    private _setContent(content?: SinglyLinkedListNode<T> | undefined): void {
        this._head = content;
        this._tail = content;
    }
}
