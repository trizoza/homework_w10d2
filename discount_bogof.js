var basket = require('./basket');

var discountBogof = {
  
  discount: 0,
  
  calculateDiscount: function (basket) {
    var discountedItems = [];
    for (var eachItem of basket.cart) {
      if (eachItem.bogof === true) {
        discountedItems.push(eachItem);
      }
    }
    
    discountedItems.sort(function(first, second) {
      first.price - second.price;
    });

    if (discountedItems.length === 0 || discountedItems.length === 1) {
      this.discount = 0;
    }
    
    else if (discountedItems.length % 2 === 0) {
      for (var i = 0; i < (discountedItems.length / 2); i++) {
        this.discount += discountedItems[i].price;
      }
    }

    else {
      for (var j = 0; j < (Math.floor(discountedItems.length / 2)); j++) {
        this.discount += discountedItems[j].price;
      }
    }
    return this.discount;
  } 
  
};

module.exports = discountBogof;