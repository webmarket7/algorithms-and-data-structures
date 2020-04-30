/*
    A function, which accepts a sorted array, and counts the unique values in the array.
     There can be negative numbers in the array, but it will always be sorted.
     Time complexity: O(n)
     Space complexity: O(1)
*/

export function countUniqueValues(arr: number[]): number {
    let j = 0;

    for (let i = 0, len = arr.length; i <= len; i++) {
        if (arr[i] !== arr[j]) {
            ++j;
            arr[j] = arr[i];
        }
    }

    return j;
}
