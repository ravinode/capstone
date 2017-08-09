var mongoose = require('mongoose');

var Product = mongoose.model('Product', {
  name: {
    type: String
  },
  description: {
    type: String
  },
  category:
  {
    type: String
  },
  producturl:
  {
    type: String
  },
  price: {
    type: String
  }

});

module.exports = {Product};
