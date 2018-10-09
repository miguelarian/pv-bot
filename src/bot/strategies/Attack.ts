import { Strategy, StrategyType } from './Strategy';
import { Action } from '../../models/Action';

export class Attack extends Strategy {
    constructor (warriorId: string) {
        super(StrategyType.attack, warriorId);
    }
    getActions (): Action[] {
        throw new Error('Method not implemented.');
    }
}