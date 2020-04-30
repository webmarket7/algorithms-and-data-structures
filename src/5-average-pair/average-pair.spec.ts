import { averagePair } from './average-pair';

describe('averagePair', () => {

    it (`should determine, if there is a pair of values in the array,
         where the average of the pair equals the target average`, () => {
        expect(averagePair([1, 2, 3], 2.5)).toBeTruthy();
        expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBeTruthy();
        expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBeFalsy();
        expect(averagePair([], 4)).toBeFalsy();
    })
});
