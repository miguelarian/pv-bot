import { Strategy, StrategyType } from "./Strategy";
import { Action } from "../../models/Action";

export class Recover extends Strategy {
    constructor(warriorId: string) {
        super(StrategyType.recover, warriorId);
    }

    getActions(): Action[] {
        throw new Error("Method not implemented.");
    }
}
