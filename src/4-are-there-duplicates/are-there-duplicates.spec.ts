import { areThereDuplicates } from './are-there-duplicates';

describe('areThereDuplicates', () => {
    it ('should check if there are duplicates in numeric arguments', () => {
        expect(areThereDuplicates(1)).toBeFalsy();
        expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
        expect(areThereDuplicates(1, 2, 2)).toBeTruthy();
    });

    it ('should check if there are duplicates in string arguments', () => {
        expect(areThereDuplicates('a')).toBeFalsy();
        expect(areThereDuplicates('a', 'b', 'c')).toBeFalsy();
        expect(areThereDuplicates('a', 'b', 'c', 'a')).toBeTruthy();
        expect(areThereDuplicates('a', 'b', 'c', 'a', 'd', 'b', 'g')).toBeTruthy();
    });
});
