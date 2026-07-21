const express = require('express');
const { calculateFine, isValidBookCode } = require('./book');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        mensaje: 'Biblioteca Digital ESPE',
        estudiante: 'Villagomez Domenica',
        nrc: '30730',
        correo: 'dnvillagomez@espe.edu.ec'
    });
});

app.get('/book/:code', (req, res) => {
    const { code } = req.params;

    if (!isValidBookCode(code)) {
        return res.status(400).json({
            error: 'Código de libro inválido. Formato esperado: AAA999'
        });
    }

    return res.json({
        code,
        title: `Libro ${code}`,
        available: true
    });
});

app.get('/fine', (req, res) => {
    const daysLate = Number(req.query.daysLate);

    if (req.query.daysLate === undefined || Number.isNaN(daysLate) || daysLate < 0) {
        return res.status(400).json({
            error: 'daysLate debe ser un número mayor o igual a 0'
        });
    }

    const fine = calculateFine(daysLate);

    return res.json({ daysLate, fine });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor de Villagomez Domenica ejecutando en: http://localhost:${PORT}`);
    });
}

module.exports = app;
