/* eslint-disable sonarjs/no-duplicate-string */
import addProtocolIfMissing from '.';

describe('URLs => addProtocolIfMissing', () => {
    it('should return original URL if it has protocol', () => {
        const firstUrl = 'http://example.com';
        const secondUrl = 'https://example.com';

        expect(addProtocolIfMissing(firstUrl)).toEqual(firstUrl);
        expect(addProtocolIfMissing(secondUrl)).toEqual(secondUrl);
    });

    it('should work for URLs with leading spaces', () => {
        const firstUrl = ' http://example.com';
        const validFirstUrl = ' http://example.com';
        const secondUrl = '   https://example.com';
        const validSecondUrl = '   https://example.com';
        const thirdUrl = '   example.com';
        const validThirdUrl = 'http://example.com';

        expect(addProtocolIfMissing(firstUrl)).toEqual(validFirstUrl);
        expect(addProtocolIfMissing(secondUrl)).toEqual(validSecondUrl);
        expect(addProtocolIfMissing(thirdUrl)).toEqual(validThirdUrl);
    });

    it('should add HTTP protocol to URLs without it', () => {
        const firstUrl = 'example.com';
        const validFirstUrl = 'http://example.com';

        expect(addProtocolIfMissing(firstUrl)).toEqual(validFirstUrl);
    });
});
