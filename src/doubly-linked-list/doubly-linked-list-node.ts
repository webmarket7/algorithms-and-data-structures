export class DoublyLinkedListNode<T> {
    private _value: T | undefined;
    private _next: DoublyLinkedListNode<T> | undefined;
    private _previous: DoublyLinkedListNode<T> | undefined;

    get value(): T | undefined {
        return this._value;
    }

    set value(value: T | undefined) {
        this._value = value;
    }

    set next(next: DoublyLinkedListNode<T> | undefined) {
        this._next = next;
    }

    get next(): DoublyLinkedListNode<T> | undefined {
        return this._next;
    }

    set previous(previous: DoublyLinkedListNode<T> | undefined) {
        this._previous = previous;
    }

    get previous(): DoublyLinkedListNode<T> | undefined {
        return this._previous;
    }

    constructor(value: T) {
        this._value = value;
    }
}
