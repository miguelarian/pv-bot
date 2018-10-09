import { State } from '../../models/State';
import { Strategy } from './Strategy';
import { Rest } from './Rest';
import { Warrior } from '../../models/Warrior';

export class StrategyAI {
    getStrategy (state: State) : Strategy[] {
        let individualStrategies = state.allies.map(warrior => {
            return this.getBestWarriorStrategy(warrior, state);
        }); //TODO: Implement logic to get best collective strategy        // Let groupStrategy : Strategy        // GroupStrategy = this.getBestGroupStrategy(state)
        return individualStrategies;
    }
    private getBestWarriorStrategy (warrior: Warrior, state: State) : Strategy {
    //TODO: implement logic to get best strategy (individual AI)
        console.log(`StrategyAI: Calculating best individual strategy for bot: ${warrior.name}`);
        return new Rest(warrior.id);
    }
}