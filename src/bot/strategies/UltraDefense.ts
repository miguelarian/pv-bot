import { Strategy, StrategyType } from './Strategy';
import { Action } from '../../models/Action';

export class UltraDefense extends Strategy {
    constructor (warriorId: string) {
        super(StrategyType.ultraDefense, warriorId);
    }
    getActions (): Action[] {
        throw new Error('Method not implemented.');
    }
}