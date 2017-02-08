var discountBogof = require('./discount_bogof');
var discountOverTwenty = require('./discount_over_twenty');
var discountLoyalty = require('./discount_loyalty');

var basket = {
  
  cart: [],
  
  value: 0,
  
  customers: [],

  discounts: [],

  addItem: function(itemToAdd) {
    this.cart.push(itemToAdd);
  },

  getCart: function() {
    return this.cart;
  },

  addCustomer: function(customerToAdd) {
    this.customers.push(customerToAdd);
  },

  removeCustomer: function() {
    this.customers.pop();
  },

  addDiscount: function(discountToAdd) {
    this.discounts.push(discountToAdd);
  },
  
  removeItem: function(itemToRemove) {
    for (var eachItem of this.cart) {
      if (eachItem === itemToRemove) {
        var indexOfItem = this.cart.indexOf(eachItem);
        this.cart.splice(indexOfItem, 1);
      }
    }
  },

  setTotalValue: function() {
    this.value = 0;
    for (var eachItem of this.cart) {
      this.value += eachItem.price;
    }

    for (var eachDiscount of this.discounts) {
      this.value -= eachDiscount.calculateDiscount(basket);
    }

    return this.value;

    // for (var eachDiscount of this.discounts) {
    //   if (eachDiscount == discountBogof) {
    //     this.value -= eachDiscount.calculateDiscount(basket);
    //   }
    // }

    // for (var eachDiscount of this.discounts) {
    //   if (eachDiscount == discountOverTwenty) {
    //     this.value -= eachDiscount.calculateDiscount(basket);
    //   }
    // }

    // for (var eachDiscount of this.discounts) {
    //   if (eachDiscount == discountLoyalty) {
    //     this.value -= eachDiscount.calculateDiscount(basket);
    //   }
    // }

  }

};

module.exports = basket;