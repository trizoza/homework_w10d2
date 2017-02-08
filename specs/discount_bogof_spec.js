// var assert = require('assert');
// var test_basket = require('../basket');
// var discountBogof = require('../discount_bogof');

// var item1 = {
//   price: 9.99,
//   bogof: true
// };

// var item2 = {
//   price: 9.99,
//   bogof: true
// };

// var item3 = {
//   price: 9.99,
//   bogof: true
// };

// var item4 = {
//   price: 9.99,
//   bogof: true
// };

// var item5 = {
//   price: 9.99,
//   bogof: true
// };

// var item6 = {
//   price: 9.99,
//   bogof: false
// };

// var item7 = {
//   price: 9.99,
//   bogof: false
// };

// var item8 = {
//   price: 9.99,
//   bogof: true
// };

// describe('DiscountBogof', function() {

//   it('can discount 2 non bogof', function() {
//     test_basket.addItem(item6);
//     test_basket.addItem(item7);
//     discountBogof.calculateDiscount();
//     assert.equal(0, discountBogof.discount);
//   });

//   it('can discount 1 bogof', function() {
//     test_basket.removeItem(item6);
//     test_basket.removeItem(item7);
//     test_basket.addItem(item1);
//     discountBogof.calculateDiscount();
//     assert.equal(0, discountBogof.discount);
//   });

//   it('can discount 2 non and 2 bogof', function() {
//     test_basket.removeItem(item1);
//     test_basket.addItem(item1);
//     test_basket.addItem(item2);
//     test_basket.addItem(item6);
//     test_basket.addItem(item7);
//     discountBogof.calculateDiscount();
//     assert.equal(9.99, discountBogof.discount);
//   });

//   it('can discount 4 bogof', function() {
//     discountBogof.discount = 0;
//     test_basket.removeItem(item1);
//     test_basket.removeItem(item2);
//     test_basket.removeItem(item6);
//     test_basket.removeItem(item7);
//     test_basket.addItem(item1);
//     test_basket.addItem(item2);
//     test_basket.addItem(item3);
//     test_basket.addItem(item4);
//     discountBogof.calculateDiscount();
//     assert.equal(19.98, discountBogof.discount);
//   });

//   it('can discount 5 bogof', function() {
//     discountBogof.discount = 0;
//     test_basket.removeItem(item1);
//     test_basket.removeItem(item2);
//     test_basket.removeItem(item3);
//     test_basket.removeItem(item4);
//     test_basket.addItem(item1);
//     test_basket.addItem(item2);
//     test_basket.addItem(item3);
//     test_basket.addItem(item4);
//     test_basket.addItem(item5);
//     discountBogof.calculateDiscount();
//     assert.equal(19.98, discountBogof.discount);
//   });

//   it('can discount 6 bogof', function() {
//     discountBogof.discount = 0;
//     test_basket.removeItem(item1);
//     test_basket.removeItem(item2);
//     test_basket.removeItem(item3);
//     test_basket.removeItem(item4);
//     test_basket.removeItem(item5);
//     test_basket.addItem(item1);
//     test_basket.addItem(item2);
//     test_basket.addItem(item3);
//     test_basket.addItem(item4);
//     test_basket.addItem(item5);
//     test_basket.addItem(item8);
//     discountBogof.calculateDiscount();
//     assert.equal(29.97, discountBogof.discount);
//   });

  

// });