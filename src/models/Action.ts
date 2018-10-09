import { ExtraAction } from './ExtraAction';

export enum ActionType {
    attack = 1,
    defend,
    insult,
    rest,
    skip,
    take,
    use,
}

export class Action {
    action: string
    source: string
    target: string
    extra: ExtraAction
    static ActionsCosts: { [action: string]: number } = {
        attack: 0,
        defend: 4,
        insult: 2,
        rest: 5,
        skip: 0,
        take: 3,
        use: 3
    }
    static getActionCost (action: ActionType) : number {
        return Action.ActionsCosts[ActionType[action]];
    }
    static getActionName (action: ActionType) : string {
        return ActionType[action];
    }
    constructor (action: string, source: string, target?: string, extra?: ExtraAction) {
        this.action = action;
        this.source = source;
        this.target = target;
        this.extra = extra;
    }
}