import { isSubsequence } from './is-subsequence';

describe('isSubsequence', () => {
    it('should check whether the characters in the first string form a subsequence of the characters in the second string', () => {
        expect(isSubsequence('hello', 'hello world')).toBeTruthy();
        expect(isSubsequence('sing', 'sting')).toBeTruthy();
        expect(isSubsequence('abc', 'abracadabra')).toBeTruthy();
        expect(isSubsequence('abc', 'acb')).toBeFalsy();
    });
});
