import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as basicAuth from 'express-basic-auth'
import * as configuration from './Configuration'

class Bot {
    public express: express.Application

    constructor() {
        this.express = express()
        this.express.use(bodyParser.json());
        this.configAuth()
        this.configRouter()
    }

    private configRouter() {
        const router = express.Router()

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

    private configAuth() {
        const basicAuth = require('express-basic-auth')

        const user = configuration.basicAuthCredentials.user
        const password = configuration.basicAuthCredentials.password

        console.log(user)
        console.log(password)
        let cred = {}
        cred[user] = password

        this.express.use(basicAuth({
            users: cred
        }), (req: basicAuth.IBasicAuthedRequest, res, next) => {
            next()
        })
    }
}

export default new Bot().express
