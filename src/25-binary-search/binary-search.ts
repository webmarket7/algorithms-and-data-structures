/*
    This function accepts a sorted array and a value and returns the index
    at which the value exists. Otherwise it returns -1
*/

export function binarySearch(arr: Array<number>, val: number): number {
    const len = arr.length;
    let left = 0;
    let right = len - 1;

    while (left <= right) {
        let middle = left === right ? left : Math.floor((left + right) / 2);
        const middleValue = arr[middle];

        if (arr[middle] === val) {
            return middle;
        } else if (middleValue < val) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}
