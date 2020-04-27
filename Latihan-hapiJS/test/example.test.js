const contoh = require('../src/Example');


describe('contoh', () => {
    test('shoul return positif if parameter positive', () => {
        const result = contoh.contoh(1);
        expect(result).toBe(1);
    })
    test('should return positif if parameter negatif', () => {
        const result = contoh.contoh(-1);
        expect(result).toBe(1);
    })
    test('should return 0 if parameter 0', () => {
        const result = contoh.contoh(0);
        expect(result).toBe(0);
    })
})
