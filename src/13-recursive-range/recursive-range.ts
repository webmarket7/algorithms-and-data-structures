/*
    This function accepts a number and adds up all the numbers from 0 to the number passed to the function
*/

export function recursiveRange(range: number): number {
    return range > 0 ? range + recursiveRange(range - 1) : 0;
}
