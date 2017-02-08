var assert = require('assert');
var test_item = require('../item');

var test_item2 = Object.create(test_item);
test_item2.price = 19.99;
test_item2.bogof = false;

describe('Item', function() {

  it('should have price', function() {
    assert.equal(9.99, test_item.price);
  });

  it('should have different price', function() {
    assert.equal(19.99, test_item2.price);
  });

  it('should be able to be discounted', function() {
    assert.equal(true, test_item.bogof);
  });

  it('should be not able to be discounted', function() {
    assert.equal(false, test_item2.bogof);
  });

});