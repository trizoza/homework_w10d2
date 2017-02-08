// var assert = require('assert');
// var test_basket = require('../basket');
// var test_customer = require('../customer');
// var discountLoyalty = require('../discount_loyalty');

// describe('DiscountLoyalty', function() {

//   it('can not discount loyalty', function() {
//     test_basket.value = 30;
//     test_customer.loyaltyCard = false;
//     test_basket.addCustomer(test_customer);
//     discountLoyalty.calculateDiscount();
//     assert.equal(0, discountLoyalty.discount);
//   });

//   it('can discount loyalty', function() {
//     test_basket.value = 30;
//     test_customer.loyaltyCard = true;
//     discountLoyalty.calculateDiscount();
//     assert.equal(1.5, discountLoyalty.discount);
//   });

// });