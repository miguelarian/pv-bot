export class ExtraAction {
    message: string
    weapon_id: string
    constructor (message?: string, weapon_id?: string) {
        this.message = message;
        this.weapon_id = weapon_id;
    }
}