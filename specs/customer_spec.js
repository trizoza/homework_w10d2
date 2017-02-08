var assert = require('assert');
var test_customer = require('../customer');

var test_customer2 = Object.create(test_customer);
test_customer2.loyaltyCard = false;

describe('Customer', function() {

  it('can have loyal card', function() {
    assert.equal(true, test_customer.loyaltyCard);
  });

  it('can not have loyal card', function() {
    assert.equal(false, test_customer2.loyaltyCard);
  });

});