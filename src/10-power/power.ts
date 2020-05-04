/*
    This function returns the power of the base to the exponent
    Recursive solution
*/

export function power(base: number, exponent: number): number {
    return exponent > 0 ? base * power(base, exponent - 1) : 1;
}
