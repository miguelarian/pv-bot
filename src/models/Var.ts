// This is used in many places (turn counter, warrior ap/health, item/weapon durability, …).
export class Var {
    current: number
    total: number

    constructor(current: number, total: number) {
        this.current = current
        this.total = total
    }
}
