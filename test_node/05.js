// Generated by CoffeeScript 1.6.3
var container;

container = require('dependable').container();

container.register('database', 'hello world');

console.log(container.get('database'));
