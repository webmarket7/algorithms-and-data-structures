/*
    This function is able to find out if two positive numbers have the same frequency of digits
    Time complexity: O(n)
*/

export function sameFrequency(num1: number, num2: number): boolean {
    const str1 = num1.toString();
    const str2 = num2.toString();

    return str1.length === str2.length && sumDigitsInNumber(str1) === sumDigitsInNumber(str2);
}

function sumDigitsInNumber(num: string): number {
    let sum = 0;

    for (let char of num) {
        sum += +char;
    }

    return sum;
}
