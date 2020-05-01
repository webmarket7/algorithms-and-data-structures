import { minSubArrayLen } from './min-subarray-len';

describe('minSubArrayLen', () => {

    it(`should return the minimal length of contiguous subarray of which
              the sum is greater than or equal to the integer passed`, () => {
        expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toEqual(2);
        expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toEqual(2);
        expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toEqual(1);
        expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toEqual(3);
        expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toEqual(5);
        expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toEqual(2);
    });

    it('should return 0 otherwise', () => {
        expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toEqual(0);
    })
});
