var express = require('express');
var {ObjectID} = require('mongodb');
var bodyParser = require('body-parser');
var {mongoose} = require('./db-connect/db-connect');
var {Product} = require('./model/product');

var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/',(req,res) => {

});

app.post('/create', (req, res) => {
  var product = new Product({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price
  });
      product.save().then((doc) => {
      res.send(doc)
      }
  );
});

app.get('/listProduct',(req,res) => {
  Product.find().then((result) =>
{
  res.send(result);
}
);
});


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
