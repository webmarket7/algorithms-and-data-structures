import { productOfArray } from './product-of-array';

describe('productOfArray', () => {

    it('should return the product of all array items', () => {
        expect(productOfArray([1, 2, 3])).toEqual(6);
        // expect(productOfArray([1, 2, 3, 10])).toEqual(60);
    });

    it('should return 1 if the array is empty', () => {
        expect(productOfArray([])).toEqual(1);
    });
});
