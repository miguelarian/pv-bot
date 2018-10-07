import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as basicAuth from 'express-basic-auth'
import Configuration, * as configuration from '../config/Configuration'
import { State } from '../models/State'
import { BotEngine } from './BotEngine'

class Bot {
    public express: express.Application
    private configuration: Configuration
    private engine: BotEngine

    constructor(configuration: Configuration, engine: BotEngine) {
        this.configuration = configuration
        this.express = express()
        this.express.use(bodyParser.json());
        this.configRouting()
        this.engine = engine
    }

    private configRouting() {
        const router = express.Router()
        const basicAuthMiddleware = this.createBasicAuthMiddelware()

        router.get('/probe/ready', basicAuthMiddleware, (req, res) => {
            res.status(200).send()
        })

        router.get('/probe/alive', basicAuthMiddleware, (req, res) => {
            console.log('/probe/alive OK')
            res.status(200).send()
        })

        router.get('/', (req, res) => {
            res.send('<h1>Up and running</h1>')
        })

        router.post('/exit', basicAuthMiddleware, (req, res) => {
            res.status(200).send()
        })

        router.post('/turn', basicAuthMiddleware, (req, res) => {
            const state = req.body as State
            const actions = this.engine.process(state)
            res.status(200).send(actions)
        })

        this.express.use('/', router)
    }

    private createBasicAuthMiddelware() {
        const user = this.configuration.basicAuth.user
        const password = this.configuration.basicAuth.password
        let systemUser = {}
        systemUser[user] = password
        return basicAuth({users: systemUser})
    }
}

export default Bot
