import { Strategy, StrategyType } from "./Strategy";
import { Action } from "../../models/Action";

export class UltraAttack extends Strategy {
    constructor(warriorId: string) {
        super(StrategyType.ultraAttack, warriorId);
    }

    getActions(): Action[] {
        throw new Error("Method not implemented.");
    }
}
