import { factorial } from './factorial';

describe('factorial', () => {
    it('should return 1 if factorial zero', () => {
        expect(factorial(0)).toEqual(1);
    });

    it('should return factorial of a passed number', () => {
        expect(factorial(1)).toEqual(1);
        expect(factorial(2)).toEqual(2);
        expect(factorial(4)).toEqual(24);
        expect(factorial(7)).toEqual(5040);
    });
});
