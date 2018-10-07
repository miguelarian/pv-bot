import { Action } from "../models/Action"
import { State } from "../models/State"
import { Strategy } from "./strategies/strategy"
import { StrategyFactory } from "./strategies/strategyFactory";

export class BotEngine {
    private state: State

    process(state: State) : Action[] {
        this.state = state
        console.log(`Turn ${state.turns.current}: Processing state...`)

        const strategy = StrategyFactory.getStrategy(this.state)

        return this.calculateActions(strategy)
    }

    private calculateActions(strategy: Strategy) : Action[] {
        const actions = [
            new Action('rest', '00000000-0000-0000-0000-111111111111'),
            new Action('rest', '00000000-0000-0000-0000-111111111111')
        ]

        console.log(`Actions returned: ${actions.map(i => i.action).join(',')}`)
        return actions
    }
}
