mongoose = require 'mongoose'

mongoose.set 'debug', true
mongoose.connect 'mongodb://192.168.2.105/mean-dev1', {}, (err)->
  if err
    console.error 'Error:', err.message
    return console.error '**Could not connect to MongoDB. Please ensure mongod is running and restart MEAN app.**'
  console.log 'Connected MongoDB sucessfully'