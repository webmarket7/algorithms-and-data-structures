import { linearSearch } from './linear-search';

describe('linearSearch', () => {

    it('should return the index of the value in array', () => {
        expect(linearSearch([10, 15, 20, 25, 30], 15)).toEqual(1);
        expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).toEqual(5);
        expect(linearSearch([100], 100)).toEqual(0);
    });

    it('should return -1 if value does not exist in array', () => {
        expect(linearSearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
        expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).toEqual(-1);
        expect(linearSearch([100], 200)).toEqual(-1);
    });
});
