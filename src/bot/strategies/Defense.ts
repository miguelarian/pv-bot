import { Strategy, StrategyType } from "./Strategy";
import { Action } from "../../models/Action";

export class Defense extends Strategy {
    constructor(warriorId: string) {
        super(StrategyType.defense, warriorId);
    }

    getActions(): Action[] {
        throw new Error("Method not implemented.");
    }
}
