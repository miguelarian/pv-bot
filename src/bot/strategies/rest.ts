import { Strategy, StrategyType } from "./strategy";
import { Action } from "../../models/Action";

export class Rest extends Strategy {
    constructor(warriorId: string) {
        super(StrategyType.rest, warriorId);
    }

    getActions(): Action[] {
        return [
            new Action('rest', '00000000-0000-0000-0000-111111111111')
        ]
    }
}
