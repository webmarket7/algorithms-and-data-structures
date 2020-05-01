/* This function returns the minimal length of contiguous subarray of which
   the sum is greater than or equal to the integer passed to the function.
   If there is none it return zero

   Time complexity O(n)
   Space complexity O(1)
*/

export function minSubArrayLen(arr: number[], num: number): number {
    const len = arr.length;
    let i = 0;
    let j = 0;
    let sum = 0;
    let minLength = len + 1;

    while (i < len) {
        if (sum < num && j < len) {
            sum += arr[j];
            j++;
        } else if (sum >= num) {
            minLength = Math.min(minLength, j - i);
            sum -= arr[i];
            i++;
        } else {
            break;
        }
    }

    return minLength === len + 1 ? 0 : minLength;
}
