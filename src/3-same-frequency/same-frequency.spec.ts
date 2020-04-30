import { sameFrequency } from './same-frequency';

describe('sameFrequency', () => {
    it('should check if two positive numbers have the same frequency of digits', () => {
        expect(sameFrequency(22, 222)).toBeFalsy();
        expect(sameFrequency(34, 14)).toBeFalsy();
        expect(sameFrequency(182, 281)).toBeTruthy();
        expect(sameFrequency(3589578, 5879385)).toBeTruthy();
    })
});
