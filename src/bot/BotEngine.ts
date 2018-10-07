import { Action } from "../models/Action"
import { State } from "../models/State"
import { StrategyAI } from "./strategies/StrategyAI";

export class BotEngine {
    private state: State
    private ai: StrategyAI
    constructor() {
        this.ai = new StrategyAI()
    }

    process(state: State) : Action[] {
        this.state = state
        console.log(`Turn ${state.turns.current}: Processing state...`)

        const warriorsStrategies = this.ai.getStrategy(this.state)

        console.log(`Warriors strategies: ${warriorsStrategies.toString()}`)

        let actions = new Array<Action>()
        warriorsStrategies.forEach(strategy => {
            return actions.push(...strategy.getActions())
        });

        console.log(`Actions returned: ${actions.map(i => i.action).join(',')}`)

        return actions
    }
}
