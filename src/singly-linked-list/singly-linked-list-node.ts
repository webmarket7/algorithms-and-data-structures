export class SinglyLinkedListNode<T> {
    private _value: T | undefined;
    private _next: SinglyLinkedListNode<T> | undefined;

    get value(): T | undefined {
        return this._value;
    }

    set value(value: T | undefined) {
        this._value = value;
    }

    set next(next: SinglyLinkedListNode<T> | undefined) {
        this._next = next;
    }

    get next(): SinglyLinkedListNode<T> | undefined {
        return this._next;
    }

    constructor(value: T) {
        this._value = value;
    }
}
