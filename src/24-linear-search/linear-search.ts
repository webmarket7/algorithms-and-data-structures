/*
    This function returns the index at which the value exists in array.
    If it doesn't exist, it returns -1
*/

export function linearSearch(arr: Array<number | string>, val: number | string): number {

    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return -1;
}
