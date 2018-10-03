const ActionsCosts: { [userId: string]: number } = {
    attack: 0,
    defend: 4,
    insult: 2,
    rest: 5,
    skip: 0,
    take: 3,
    use: 3
}

export class Action {
    action: string
    source: string
    target: string
    extra: object

    constructor(action: string, source: string, target?: string, extra?: object) {
        this.action = action
        this.source = source
        this.target = target
        this.extra = extra
    }
}

