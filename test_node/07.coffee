mongoose = require 'mongoose'

mongoose.set 'debug', true # change to false if don't want log on console
mongoose.connect 'mongodb://localhost/mean-dev', {}, (err)->
  if err
    console.error 'Error:', err.message
    return console.error '**Could not connect to MongoDB. Please ensure mongod is running and restart MEAN app.**'
  console.log 'Connected MongoDB sucessfully'
  require '../packages/users/server/models/user'
  User = mongoose.model("User")
  user = new User {"email": "zjj@163.com", "password": "12345678", "confirmPassword": "12345678", "username": "jj", "name": "杰"}
  user.provider = "local"
  user.roles = ["authenticated"]
  user.save (err, data, count) ->
    console.log {err, data, count}
    if err
      switch err.code
        when 11000, 11001
          console.log 400, [
            msg: "Username already taken"
            param: "username"
          ]
        else
          modelErrors = []
          if err.errors
            for x of err.errors
              modelErrors.push
                param: x
                msg: err.errors[x].message
                value: err.errors[x].value

            console.log 400, modelErrors
      return
    console.log 200, 'save user and login successfully' # TODO: why there is a field called __v?
