const Weapons: { [userId: string]: number } = {

}

class Weapon {
    id: string
    name: string
    ap_cost: number
    ap_damage: number
    durability: Var

    constructor(id: string, name: string, ap_cost: number, ap_damage: number, durability: Var) {
        this.id = id
        this.name = name
        this.ap_cost = ap_cost
        this.ap_damage = ap_damage
        this.durability = durability
    }
}
