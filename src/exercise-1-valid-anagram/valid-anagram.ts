/*
    This function checks if second string is a valid anagram of the first string
    with time and space complexity of O(n)
*/

export function validAnagram(firstStr: string, secondStr: string): boolean {
    if (firstStr.length !== secondStr.length) {
        return false;
    }

    const lookup: { [key: string]: number } = {};

    for (const char of firstStr) {
        lookup[char] = ++lookup[char] || 1;
    }

    for (const char of secondStr) {
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char] -= 1;
        }
    }

    return true;
}
