var basket = require('./basket');

var discountLoyalty = {
  
  discount: 0,
  
  calculateDiscount: function (basket) {
    if (basket.customers[0].loyaltyCard === true) {
      this.discount = 0.05 * basket.value;
    }
    return this.discount;
  }

};

module.exports = discountLoyalty;