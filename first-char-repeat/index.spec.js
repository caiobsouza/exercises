const { expect } = require('chai');
const repeating = require('./');

describe('First repeating character', () => {
  it('should return \\0 if such char does not exist', () => {
    expect(repeating('caio')).to.be.eq('\0');
  });
});
