container = require('dependable').container()

container.register 'database', 'hello world'
console.log container.get 'database'