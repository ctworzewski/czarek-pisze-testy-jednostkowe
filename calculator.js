function calc(operation, a, b) {
    switch (operation) {
        case 'add': return a + b;
        case 'minus': return a - b; // oj ,chyba tu specjalnie napisałem błąd, abyś zweryfikowal kod który przyklejasz :) 
        case 'divide': return a / b; // trzeba dopisać Czarku
        case 'multiply': return a * b; // trzeba dopisać Czarku
    }
}

module.exports = calc;