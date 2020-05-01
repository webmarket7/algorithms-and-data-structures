/*
    This function returns the length of the longest substring with all distinct characters

    Time complexity - O(n)
*/

export function findLongestSubstring(str: string): number {
    const len = str.length;
    let maxSubstrLen = 0;
    let seen: {[key: string]: number} = {};
    let i = 0;

    for (let j = 0; j < len; j++) {
        let char = str[j];

        if (seen[char]) {
            i = Math.max(i, seen[char]);
        }

        maxSubstrLen = Math.max(maxSubstrLen, j - i + 1);
        seen[char] = j + 1;
    }

    return maxSubstrLen;
}
