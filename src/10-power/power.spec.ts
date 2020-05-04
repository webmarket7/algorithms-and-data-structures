import { power } from './power';

describe('power', () => {

    it('should return 1 if exponent is 0', () => {
        expect(power(2, 0)).toEqual(1);
        expect(power(3, 0)).toEqual(1);
    });

    it('should return the power of the base to the exponent', () => {
        expect(power(11, 2)).toEqual(121);
        expect(power(2, 4)).toEqual(16);
    });
});
