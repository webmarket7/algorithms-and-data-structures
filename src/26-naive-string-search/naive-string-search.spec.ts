import { naiveStringSearch } from './naive-string-search';

describe('naiveStringSearch', () => {

    it('should count substring occurences in the given string', () => {
        expect(naiveStringSearch('harold said haha in hamburg', 'ha')).toEqual(4);
        expect(naiveStringSearch('harold said haha in hamburg', 'haha')).toEqual(1);
        expect(naiveStringSearch('harold said haha in hamburg', 'hat')).toEqual(0);
    });
});
