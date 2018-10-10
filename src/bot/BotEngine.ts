import { Action } from '../models/Action'
import { State } from '../models/State'
import { StrategyAI } from './strategies/StrategyAI'

export class BotEngine {
    private ai: StrategyAI
    constructor() {
        this.ai = new StrategyAI()
    }
    process(state: State): Action[] {
        console.log(`Turn ${state.turns.current}: Processing state...`)

        const actions = this.ai.getStrategy(state)

        return actions
    }
}
