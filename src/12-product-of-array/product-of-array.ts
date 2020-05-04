/*
    This function takes in an array of numbers and returns the product of them all
    Recursive solution
*/

export function productOfArray(arr: number[]): number {
    return arr.length ? arr[0] * productOfArray(arr.slice(1)) : 1;
}
