var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ravi:ravi@ds031872.mlab.com:31872/heroku_6w4f20rq',(e) =>
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
