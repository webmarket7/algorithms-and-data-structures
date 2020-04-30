/* This function takes in two strings and checks whether
   the characters in the first string form a subsequence of the characters
   in the second string
*/

export function isSubsequence(str1: string, str2: string): boolean {
    const lastIndex = str1.length - 1;
    let j = 0;

    for (let i = 0, len = str2.length; i < len; i++) {
        if (j === lastIndex) {
            return true;
        }

        if (str1[j] === str2[i]) {
            j++;
        }
    }

    return false;
}
