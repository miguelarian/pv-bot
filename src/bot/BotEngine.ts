import { State } from "../models/State";
import { Action } from "../models/Action";
import { Item } from "../models/Item";
import { Weapon } from "../models/Weapon";

export class BotEngine {

    items : Item[]
    weapons : Weapon[]
    constructor(items: Item[], weapons: Weapon[]) {
        items = items
        weapons = weapons
    }

    process(state: State) : Action[] {
        console.log(`Turn ${state.turns.current}: Processing state...`)

        let actions = [
            new Action('rest', '00000000-0000-0000-0000-111111111111'),
            new Action('rest', '00000000-0000-0000-0000-111111111111')
        ]

        return actions
    }
}
