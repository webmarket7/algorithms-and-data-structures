import { fib } from './fib';

describe('fib', () => {
    it('should return the nth number in the Fibonacci sequence', () => {
        expect(fib(4)).toEqual(3);
        expect(fib(10)).toEqual(55);
        expect(fib(28)).toEqual(317811);
        expect(fib(35)).toEqual(9227465);
    });
});
