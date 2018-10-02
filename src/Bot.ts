import * as express from 'express'
import * as bodyParser from 'body-parser'

class Bot {
    public express: express.Application

    constructor() {
        this.express = express()
        this.config()
    }

    private config(): void {
        this.express.use(bodyParser.json());
        let router = express.Router()

        router.get('/probe/ready', (req, res) => {
            console.log('/probe/ready OK')
            res.sendStatus(200)
        })

        router.get('/probe/alive', (req, res) => {
            console.log('/probe/alive OK')
            res.sendStatus(200)
        })

        router.post('/exit', (req, res) => {
            console.log('/exit OK')
            res.sendStatus(200)
        })

        router.post('/turn', (req, res) => {
            console.log('/turn OK')
            res.sendStatus(200)
        })

        this.express.use('/', router)
    }
}

export default new Bot().express