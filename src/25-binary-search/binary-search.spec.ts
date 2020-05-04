import { binarySearch } from './binary-search';

describe('binarySearch', () => {

    it('should return the index of the searched value in the array', () => {
        expect(binarySearch([1], 1)).toEqual(0);
        expect(binarySearch([1, 2], 1)).toEqual(0);
        expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
    });

    it('should return -1 if the searched value is missing in the array', () => {
        expect(binarySearch([1], 2)).toEqual(-1);
        expect(binarySearch([1, 2], 3)).toEqual(-1);
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
    });
});
