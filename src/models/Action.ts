const ActionsCost: { [userId: string]: number } = {
    attack: 0,
    defend: 4,
    insult: 2,
    rest: 5,
    skip: 0,
    take: 3,
    use: 3
}

class Action {
    action: string
    source: string
    target: string
    extra: string
}
