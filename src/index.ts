import Bot from './Bot'

const port = process.env.PORT || 3000

console.log('*** STARTING FUCKING-FIGHTER BOT ***')

Bot.listen(port, (error) => {
    if (error) {
        return console.log(error)
    }

    return console.log(`FUCKING-FIGHTER is READY TO RUMBLE on port ${port}`)
})
