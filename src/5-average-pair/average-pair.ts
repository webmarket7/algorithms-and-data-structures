/*
    Given a sorted array of integers and a target average, this function determines if there is
    a pair of values in the array where the average of the pair equals the target average.

    Time complexity: O(n)
    Space complexity: O(1)
*/

export function averagePair(arr: number[], num: number): boolean {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let average = (arr[left] + arr[right]) / 2;

        if (average === num) {
            return true;
        } else if (average < num) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}
