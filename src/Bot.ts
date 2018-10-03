import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as basicAuth from 'express-basic-auth'
import * as configuration from './Configuration'
class Bot {
    public express: express.Application

    constructor() {
        this.express = express()
        this.express.use(bodyParser.json());
        // this.configAuth()
        this.configRouter()
    }

    private configRouter() {
        const router = express.Router()

        const basicAuth = require('express-basic-auth')

        const user = configuration.basicAuthCredentials.user
        const password = configuration.basicAuthCredentials.password

        let cred = {}
        cred[user] = password

        let ba = basicAuth(({ users: cred }), (req: basicAuth.IBasicAuthedRequest, res, next) => { next() })

        router.get('/probe/ready', ba, (req, res) => {
            console.log('/probe/ready OK')
            res.status(200).send()
        })

        router.get('/probe/alive', ba, (req, res) => {
            console.log('/probe/alive OK')
            res.status(200).send()
        })

        router.get('/', (req, res) => {
            console.log('/ OK')
            res.send('<h1>Up un running</h1>')
        })

        router.post('/exit', ba, (req, res) => {
            console.log('/exit OK')
            res.status(200).send()
        })

        router.post('/turn', ba, (req, res) => {
            console.log('/turn OK')
            res.status(200).send()
        })

        this.express.use('/', router)
    }

    private configAuth() {
        const basicAuth = require('express-basic-auth')

        const user = configuration.basicAuthCredentials.user
        const password = configuration.basicAuthCredentials.password

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
