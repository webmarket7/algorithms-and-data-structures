/*
   This function accepts a number and returns the nth number in the Fibonacci sequence
   Recursive solution
*/

export function fib(n: number): number {
    return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
}
