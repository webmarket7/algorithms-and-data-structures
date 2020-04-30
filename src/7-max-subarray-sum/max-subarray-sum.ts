/* This function accepts an array of integers and a number called n
   and calculates the maximum sum of n consecutive elements in the array.

   Time complexity: O(n)
   Space complexity: O(1)
*/

export function maxSubarraySum(arr: number[], n: number): number | null {
    const arrLen = arr.length;

    if (!arrLen || !n || n > arrLen) {
        return null;
    }

    if (n === 1) {
        return Math.max(...arr);
    }

    let currSum = 0;

    for (let i = 0; i < n; i++) {
        currSum += arr[i];
    }

    let maxSoFar = currSum;

    for (let i = 0, len = arrLen - n; i < len; i++) {
        const left = i;
        const right = i + n;

        currSum = (currSum - arr[left]) + arr[right];
        maxSoFar = Math.max(maxSoFar, currSum);
    }

    return maxSoFar;
}
