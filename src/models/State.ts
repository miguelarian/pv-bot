import { Var } from "./Var";
import { Warrior } from "./Warrior";
import { Item } from "./Item";
import { Weapon } from "./Weapon";

export class State {
    turns: Var
    allies: Warrior[]
    enemies: Warrior[]
    weapons: Weapon[]
    items: Item[]

    constructor(turns: Var, allies: Warrior[], enemies: Warrior[], weapons: Weapon[], items: Item[]) {
        this.turns = turns
        this.allies = allies
        this.enemies = enemies
        this.weapons = weapons
        this.items = items
    }
}
