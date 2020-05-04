/*
    This function accepts a number and returns the factorial of that number
    Recursive solution
*/

export function factorial(num: number): number {
    return num > 1 ? num * factorial(num - 1) : 1;
}
