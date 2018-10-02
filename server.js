var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

console.log('*** STARTING NODE SERVER ***')

const port = 3000

app.listen(port, () => console.log(`The bot is up and running on port ${port}`))