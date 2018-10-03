import BasicAuthorization from "./config/BasicAuthorization";
import Bot from './bot/Bot'
import Configuration from './config/Configuration';
import { Engine } from './game/Engine';

console.log('*** STARTING FUCKING-FIGHTER BOT ***')

const port = process.env.PORT || 3000
const fuckingFighter = new Bot(new Configuration(new BasicAuthorization()), new Engine())
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
