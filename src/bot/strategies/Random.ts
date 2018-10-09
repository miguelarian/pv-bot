import { Strategy, StrategyType } from './Strategy';
import { Action } from '../../models/Action';

export class Random extends Strategy {
    constructor (warriorId: string) {
        super(StrategyType.random, warriorId);
    }
    getActions (): Action[] {
        throw new Error('Method not implemented.');
    }
}