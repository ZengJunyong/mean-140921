mongoose = require 'mongoose'

mongoose.set 'debug', true
mongoose.connect 'mongodb://localhost/mean-dev1', {}, (err)->
  if err
    console.error 'Error:', err.message
    return console.error '**Could not connect to MongoDB. Please ensure mongod is running and restart MEAN app.**'
  console.log 'Connected MongoDB sucessfully'
