import { recursiveRange } from './recursive-range';

describe('recursiveRange', () => {
    it('should add all the numbers from 0 the number passed to the function', () => {
        expect(recursiveRange(0)).toEqual(0);
        expect(recursiveRange(6)).toEqual(21);
        expect(recursiveRange(10)).toEqual(55);
    });
});
