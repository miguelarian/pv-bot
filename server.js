const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.get('/probe/ready', function (req, res) {
    console.log('/probe/ready OK')
    res.send(200)
})

app.get('/probe/alive', function (req, res) {
    console.log('/probe/alive OK')
    res.send(200)
})

app.post('/exit', function (req, res) {
    console.log('/exit OK')
    res.send(200)
})

app.post('/turn', function (req, res) {
    console.log('/turn OK')
    res.send(200)
})

console.log('*** STARTING NODE SERVER ***')

const port = 3000

app.listen(port, () => console.log(`The bot is up and running on port ${port}`))