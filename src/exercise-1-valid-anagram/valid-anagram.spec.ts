import { validAnagram } from './valid-anagram';

describe('validAnagram', () => {

    it('should check anagrams', () => {
        expect(validAnagram('', '')).toBeTruthy();
        expect(validAnagram('aaz', 'zza')).toBeFalsy();
        expect(validAnagram('rat', 'car')).toBeFalsy();
        expect(validAnagram('awesome', 'awesom')).toBeFalsy();
        expect(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')).toBeFalsy();
        expect(validAnagram('qwerty', 'qeywrt')).toBeTruthy();
        expect(validAnagram('texttwisttime', 'timetwisttext')).toBeTruthy();
    });
});
