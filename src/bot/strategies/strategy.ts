import { Action } from "../../models/Action";

export enum StrategyType {
    checkmate = 1,
    rest,
    health
}
export abstract class Strategy {
    // TODO: review this model... warriorId required?
    warriorId: string
    type: StrategyType
    constructor(type: StrategyType, warriorId: string) {
        this.warriorId = warriorId
        this.type = type
    }

    abstract getActions() : Action[]

    public toString = () : string => {
        return StrategyType[this.type]
    }
}
