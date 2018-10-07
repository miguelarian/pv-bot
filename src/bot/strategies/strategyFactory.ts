import { State } from "../../models/State";
import { Strategy } from "./strategy";

export class StrategyFactory {

    static getStrategy(state: State) {
        return new Strategy()
    }
}
