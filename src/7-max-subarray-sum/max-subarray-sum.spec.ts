import { maxSubarraySum } from './max-subarray-sum';

describe('maxSubarraySum', () => {
    it ('should return null if an empty array is passed in', () => {
        expect(maxSubarraySum([], 4)).toEqual(null);
    });

    it ('should return null if zero n is passed in', () => {
        expect(maxSubarraySum([1, 2, 3, 4], 0)).toEqual(null);
    });

    it ('should return null if n is bigger than array length', () => {
        expect(maxSubarraySum([2, 3], 3)).toEqual(null);
    });

    it ('should return biggest value if n equals 1', () => {
        expect(maxSubarraySum([4, 2, 1, 6], 1)).toEqual(6);
    });

    it('should calculate maximum sum of n consecutive elements in the array', () => {
        expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
        expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
        expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
        expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toEqual(5);
    });
});
