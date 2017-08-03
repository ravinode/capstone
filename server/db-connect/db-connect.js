var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Product');

module.export = {mongoose};
