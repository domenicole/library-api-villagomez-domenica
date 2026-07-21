const { calculateFine, isValidBookCode } = require('./book');

describe('calculateFine', () => {
    test('La multa por días de atraso es correcta', () => {
        expect(calculateFine(5)).toBe(2.5);
    });

    test('Retorna 0 cuando no hay días de atraso', () => {
        expect(calculateFine(0)).toBe(0);
    });

    test('Lanza un error cuando los días son negativos', () => {
        expect(() => calculateFine(-3)).toThrow(RangeError);
    });
});

describe('isValidBookCode', () => {
    test('Acepta códigos válidos', () => {
        expect(isValidBookCode('VIL102')).toBe(true);
    });

    test('Rechaza un código con formato inválido', () => {
        expect(isValidBookCode('VILL10')).toBe(false);
    });

    test('Rechaza códigos vacíos', () => {
        expect(isValidBookCode('')).toBe(false);
    });
});
