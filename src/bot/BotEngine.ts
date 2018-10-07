import { State } from "../models/State"
import { Action } from "../models/Action"

export class BotEngine {
    private state: State

    process(state: State) : Action[] {
        this.state = state
        console.log(`Turn ${state.turns.current}: Processing state...`)

        return this.calculateActions()
    }

    private calculateActions() : Action[] {
        const actions = [
            new Action('rest', '00000000-0000-0000-0000-111111111111'),
            new Action('rest', '00000000-0000-0000-0000-111111111111')
        ]

        console.log(`Actions returned: ${actions}`)
        return actions
    }
}
