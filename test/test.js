
const { expect } = require('chai');
it('blebleble', () => {
    expect(1).to.be.equal(1);
})

const calc = require('../calculator');
it('dodawanie', () => {
    expect(calc('add', 1, 2)).to.be.equal(3);
    expect(calc('add', 1, -2)).to.be.equal(-1);
});
it('odejmowanie', () => {
    expect(calc('minus', 5, 2)).to.be.equal(3);
    expect(calc('minus', 10, -2)).to.be.equal(12);
});
it('dzielenie', () => {
    expect(calc('divide', 10, 2)).to.be.equal(5);
    expect(calc('divide', 2, 2)).to.be.equal(1);
});
it('mnozenie', () => {
    expect(calc('multiply', 10, 2)).to.be.equal(20);
    expect(calc('multiply', 4, -2)).to.be.equal(-8);
});