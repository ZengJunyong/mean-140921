_ = require 'lodash'

configPath = process.cwd() + '/../config/env'
combination = _.extend require(configPath + '/all'), require(configPath + '/development')

console.log combination
