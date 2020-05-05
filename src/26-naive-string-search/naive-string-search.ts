/*
    This function counts how many times given substring occurs in a given string using naive string search algorithm
    Time complexity: O(m*n)
    Space complexity: O(1)
*/

export function naiveStringSearch(str: string, substr: string): number {
    let count = 0;

    for(let i = 0, strLen = str.length; i < strLen; i++) {
        for(let j = 0, substrLen = substr.length; j < substrLen; j++) {
            if (substr[j] !== str[i + j]) {
                break;
            }

            if (j === substrLen - 1) {
                count += 1;
            }
        }
    }

    return count;
}
