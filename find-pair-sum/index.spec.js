const { expect } = require('chai');
const { after } = require('mocha');
const find = require('./');
const brute = require('./alternatives/brute-force');

describe('Find pair that sums up to k', () => {
  const array = [4, 5, 1, -3, 6];

  it('should return true for k=11', () => {
    expect(find(array, 11)).to.be.true;
  });

  it('should return true for k=(-2)', () => {
    expect(find(array, 11)).to.be.true;
  });

  it('should return false for k=8', () => {
    expect(find(array, 8)).to.be.false;
  });

  it('should return true for [5, 5, 5, 5, 5] and k=10', () => {
    expect(find([5, 5, 5, 5, 5], 10)).to.be.true;
  });

  after(() => {
    const big = [1, 2, 3, -1, -2, -3, 1, 2, 3, -1, -2, -3, 5, 6, 1, 2, 3, -1, -2, -3, 1, 2, 3, -1, -2, -3];
    console.time('find()');
    find(big, 11);
    console.timeEnd('find()');
    console.time('brute()');
    brute(big, 11);
    console.timeEnd('brute()');
  });
});
