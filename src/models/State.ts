class State {
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
