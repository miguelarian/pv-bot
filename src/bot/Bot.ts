import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as basicAuth from 'express-basic-auth'
import * as configuration from '../config/Configuration'
class Bot {
    public express: express.Application

    constructor() {
        this.express = express()
        this.express.use(bodyParser.json());
        this.configRouting()
    }

    private configRouting() {
        const router = express.Router()

        let basicAuthentication = this.getBasicAuthentication()

        router.get('/probe/ready', basicAuthentication, (req, res) => {
            res.status(200).send()
        })

        router.get('/probe/alive', basicAuthentication, (req, res) => {
            console.log('/probe/alive OK')
            res.status(200).send()
        })

        router.get('/', (req, res) => {
            res.send('<h1>Up and running</h1>')
        })

        router.post('/exit', basicAuthentication, (req, res) => {
            res.status(200).send()
        })

        router.post('/turn', basicAuthentication, (req, res) => {
            res.status(200).send()
        })

        this.express.use('/', router)
    }

    private getBasicAuthentication() {
        const user = configuration.basicAuthCredentials.user
        const password = configuration.basicAuthCredentials.password
        let systemUser = {}
        systemUser[user] = password
        return basicAuth({users: systemUser})
    }
}

export default new Bot().express
