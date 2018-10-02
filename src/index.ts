import Bot from './Bot'

const port = process.env.PORT || 3000

console.log('*** STARTING BOT SERVER ***')

Bot.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`The bot is up and running on port ${port}`)
})
