const assert = require('assert');
const cart = require('./cart');

describe('Cart', () => {
  it('should return 0 cost for empty shopping cart', () => {
    const data = [];
    assert.equal(cart(data), 0);
  })
  it('should return 25p for a single Orange', () => {
    const data = ['Orange'];
    assert.equal(cart(data), 25);
  });
  it('should return 60p for a single Apple', () => {
    const data = ['Apple'];
    assert.equal(cart(data), 60);
  });
  it('should return 50p for a two Oranges', () => {
    const data = ['Orange', 'Orange'];
    assert.equal(cart(data), 50);
  });
  it('should return 145p for three Apples and one Orange', () => {
    const data = ['Apple', 'Apple', 'Orange', 'Apple'];
    assert.equal(cart(data), 145);
  })

  it('should return 60p when buy two get one free on Apples', () => {
    const data = ['Apple', 'Apple'];
    assert.equal(cart(data), 60);
  })

  it('should return 20p for a single Banana', () => {
    const data = ['Banana'];
    assert.equal(cart(data), 20);
  })
  it('should return 20p for two Bananas', () => {
    const data = ['Banana', 'Banana'];
    assert.equal(cart(data), 20);
  })
  it('should return 60p for one Banana and one Apple', () => {
    const data = ['Banana', 'Apple'];
    assert.equal(cart(data), 60);
  });
});