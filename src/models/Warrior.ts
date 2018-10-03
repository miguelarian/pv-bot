class Warrior {
    id: string
    name: string
    warriorClass: string
    health: Var
    ap: Var
    weapons: Weapon[]
    items: Item[]

    constructor(id: string, name: string, warriorClass: string, health: Var, ap: Var, weapons: Weapon[], items: Item[]) {
        this.id = id
        this.name = name
        this.warriorClass = warriorClass
        this.health = health
        this.ap = ap
        this.weapons = weapons
        this.items = items
    }
}