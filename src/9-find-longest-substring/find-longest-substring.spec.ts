import { findLongestSubstring } from './find-longest-substring';

describe('findLongestSubstring', () => {

    it ('should return 0 if empty string is passed in', () => {
        expect(findLongestSubstring('')).toEqual(0);
    });

    it ('should return length of the longest substring with all distinct characters', () => {
        expect(findLongestSubstring('rithmschool')).toEqual(7);
        expect(findLongestSubstring('thisisawesome')).toEqual(6);
        expect(findLongestSubstring('thecatinthehat')).toEqual(7);
        expect(findLongestSubstring('bbbbbb')).toEqual(1);
        expect(findLongestSubstring('longestsubstring')).toEqual(8);
        expect(findLongestSubstring('thisishowwedoit')).toEqual(6);
    });
});
