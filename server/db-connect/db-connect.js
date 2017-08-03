var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ravi:ravi@ds019836.mlab.com:19836/heroku_xnr7vlr6',(e) =>
{
  if(e)
  {
    return console.log("Error");
  }
  else {
    console.log("Connected");
  }
});
module.export = {mongoose};
