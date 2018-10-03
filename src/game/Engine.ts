import { State } from "../models/State";
import { Action } from "../models/Action";

export class Engine {

    process(state: State) : Action {
        console.log(`Turn ${state.turns.current}: Processing state...`)
        return new Action('rest', '00000000-0000-0000-0000-111111111111')
    }
}
