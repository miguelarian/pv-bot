import { Action } from '../../models/Action'
import { State } from '../../models/State'
import { Strategy } from './Strategy'
import { Rest } from './Rest'
import { Warrior } from '../../models/Warrior'

export class StrategyAI {
    getStrategy(state: State): Action[] {
        let result = new Array<Action>()
        state.allies.forEach(warrior => {
            let strategy = this.getBestWarriorStrategy(warrior, state)
            result.push(...strategy.getActions())
            console.log(`Warrior: ${warrior} strategy: ${strategy.toString()}`)
        })

        return result
    }

    private getBestWarriorStrategy(warrior: Warrior, state: State): Strategy {
        //TODO: implement logic to get best strategy (individual AI)
        console.log(
            `StrategyAI: Calculating best individual strategy for warrior: ${
                warrior.name
            }`,
        )
        return new Rest(warrior.id)
    }
}
