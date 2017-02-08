var assert = require('assert');
var test_basket = require('../basket');
var test_customer = require('../customer');
var test_item = require('../item');
var discountBogof = require('../discount_bogof');
var discountOverTwenty = require('../discount_over_twenty');
var discountLoyalty = require('../discount_loyalty');

var final_basket = Object.create(test_basket);

var loyal_customer = {
  loyaltyCard: true
};

var regular_customer = {
  loyaltyCard: false
};

var item1 = {
  price: 9.99,
  bogof: true
};

var item2 = {
  price: 9.99,
  bogof: true
};

var item3 = {
  price: 9.99,
  bogof: true
};

var item4 = {
  price: 9.99,
  bogof: true
};

var item5 = {
  price: 9.99,
  bogof: true
};

var item6 = {
  price: 9.99,
  bogof: true
};

var item7 = {
  price: 9.99,
  bogof: false
};

var item8 = {
  price: 9.99,
  bogof: false
};

describe('Basket', function() {

  it('can be empty', function() {
    assert.equal(0, test_basket.cart.length);
  });

  it('can have value', function() {
    assert.equal(0, test_basket.value);
  }); 

  it('can add item', function() {
    test_basket.addItem(test_item);
    assert.equal(1, test_basket.cart.length);
  })

  it('can remove item', function() {
    test_basket.removeItem(test_item);
    assert.equal(0, test_basket.cart.length);
  })

  it('can add customer', function() {
    test_basket.addCustomer(test_customer);
    assert.equal(1, test_basket.customers.length);
  })

  it('can remove customer', function() {
    test_basket.removeCustomer();
    assert.equal(0, test_basket.customers.length);
  })

  it('can set total value for loyal customer', function() {
    final_basket.addCustomer(loyal_customer);
    final_basket.addItem(item1);
    final_basket.addItem(item2);
    final_basket.addItem(item3);
    final_basket.addItem(item4);
    final_basket.addItem(item5);
    final_basket.addItem(item6);
    final_basket.addDiscount(discountBogof);
    final_basket.addDiscount(discountOverTwenty);
    final_basket.addDiscount(discountLoyalty);
    final_basket.setTotalValue();
    assert.equal(25, final_basket.value);
  })

});