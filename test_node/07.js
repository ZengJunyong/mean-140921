// Generated by CoffeeScript 1.6.3
var mongoose;

mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/mean-dev', {}, function(err) {
  var User, user;
  if (err) {
    console.error('Error:', err.message);
    return console.error('**Could not connect to MongoDB. Please ensure mongod is running and restart MEAN app.**');
  }
  console.log('Connected MongoDB sucessfully');
  require('../packages/users/server/models/user');
  User = mongoose.model("User");
  user = new User({
    "email": "zjj@163.com",
    "password": "12345678",
    "confirmPassword": "12345678",
    "username": "jj",
    "name": "杰"
  });
  user.provider = "local";
  user.roles = ["authenticated"];
  return user.save(function(err, data, count) {
    var modelErrors, x;
    console.log({
      err: err,
      data: data,
      count: count
    });
    if (err) {
      switch (err.code) {
        case 11000:
        case 11001:
          console.log(400, [
            {
              msg: "Username already taken",
              param: "username"
            }
          ]);
          break;
        default:
          modelErrors = [];
          if (err.errors) {
            for (x in err.errors) {
              modelErrors.push({
                param: x,
                msg: err.errors[x].message,
                value: err.errors[x].value
              });
            }
            console.log(400, modelErrors);
          }
      }
      return;
    }
    return console.log(200, 'save user and login successfully');
  });
});
