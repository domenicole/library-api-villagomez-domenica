const BOOK_CODE_REGEX = /^[A-Z]{3}[0-9]{3}$/;

function isValidBookCode(code) {
    if (typeof code !== 'string' || code.length === 0) {
        return false;
    }
    return BOOK_CODE_REGEX.test(code);
}

function calculateFine(daysLate) {
    if (typeof daysLate !== 'number' || Number.isNaN(daysLate)) {
        throw new TypeError('La entrada debe ser un número');
    }
    if (daysLate < 0) {
        throw new RangeError('La entrada no puede ser número negativo');
    }
    return Number((daysLate * 0.5).toFixed(2));
}

module.exports = { calculateFine, isValidBookCode };
