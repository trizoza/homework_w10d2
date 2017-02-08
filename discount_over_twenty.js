var basket = require('./basket');

var discountOverTwenty = {
  
  discount: 0,
  
  calculateDiscount: function (basket) {
    if (basket.value >= 20) {
      this.discount = (0.1 * basket.value);
    }
    return this.discount;
  }

};

module.exports = discountOverTwenty;