import { Strategy, StrategyType } from "./Strategy";
import { Action } from "../../models/Action";

export class Default extends Strategy {
    constructor(warriorId: string) {
        super(StrategyType.default, warriorId);
    }

    getActions(): Action[] {
        throw new Error("Method not implemented.");
    }
}
