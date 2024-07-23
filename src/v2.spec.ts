import * as v2 from './v2';

describe('v2', () => {
    test('v2 should return true', () => {
        expect(v2.removeServerCode('./src/mock/browser')).toBe(true);
    });
}); 