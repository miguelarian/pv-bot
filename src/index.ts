import BasicAuthorization from "./config/BasicAuthorization";
import Bot from './bot/Bot'
import Configuration from './config/Configuration';
import { BotEngine } from './bot/BotEngine';

console.log('*** STARTING FUCKING-FIGHTER BOT ***')

const port = process.env.PORT || 3000

const authentication = new BasicAuthorization()
const configuration = new Configuration(authentication)
const botEngine = new BotEngine()

const fuckingFighter = new Bot(configuration, botEngine)
fuckingFighter.express.listen(port, (error) => {
    if (error) {
        return console.log(error)
    }

    console.log(`FUCKING-FIGHTER is ready to rumble on port ${port}`)
    console.log(FF_logo)
    return
})

const FF_logo = `
####### #     #  #####  #    # ### #     #  #####     ####### ###  #####  #     # ####### ####### ######
#       #     # #     # #   #   #  ##    # #     #    #        #  #     # #     #    #    #       #     #
#       #     # #       #  #    #  # #   # #          #        #  #       #     #    #    #       #     #
#####   #     # #       ###     #  #  #  # #  ####    #####    #  #  #### #######    #    #####   ######
#       #     # #       #  #    #  #   # # #     #    #        #  #     # #     #    #    #       #   #
#       #     # #     # #   #   #  #    ## #     #    #        #  #     # #     #    #    #       #    #
#        #####   #####  #    # ### #     #  #####     #       ###  #####  #     #    #    ####### #     # `
