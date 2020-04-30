/*
    This function accepts variable number of arguments and checks if there are
    duplicates among them.

    Time complexity: O(n)
    Space complexity: O(n)
*/

export function areThereDuplicates(...args: Array<string | number>): boolean {
    const len = args.length;

    if (len > 1) {
        const lookup: {[key: string]: number} = {};

        for (let i = 0; i < len; i++) {
            const arg = args[i];

            if (lookup[arg]) {
                return true;
            } else {
                lookup[arg] = 1;
            }
        }
    }

    return false;
}
