fs = require 'fs'

files = fs.readdirSync process.cwd()
console.log files

filenames = files.map (file)->
  file.slice 0, -3
console.log filenames

index = filenames.indexOf process.env.NODE_ENV
console.log index
console.log ~index
console.log ~0
console.log ~1
console.log ~2