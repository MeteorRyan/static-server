// Require express
const express = require('express')
const morgan = require('morgan')
// Create a new server instance
const server = express()
// Tell express to server static content
// from the public folder
server.use(morgan('common'))


server.use(express.static('public', {
  extensions: ['html', 'htm', 'jpg']
}))
// Grab the port off the environment
// but fallback to the value 5000 if
// the user never set the port
const { PORT = 5000 } = process.env

server.listen(PORT, () => console.log(
  "Listening at http://localhost:%s", PORT
))