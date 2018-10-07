import BasicAuthorization from "./config/BasicAuthorization";
import Bot from './bot/Bot'
import Configuration from './config/Configuration';
import { BotEngine } from './bot/BotEngine';
import { Weapon } from "./models/Weapon";
import { Item } from "./models/Item";
import { Var } from "./models/Var";

console.log('*** STARTING FUCKING-FIGHTER BOT ***')

const port = process.env.PORT || 3000

const authentication = new BasicAuthorization()
const configuration = new Configuration(authentication)


const itemList = [ new Item('00000000-0000-0000-bbbb-111111111111', 'Bag of Shame') ]
const weaponsList = [ new Weapon('00000000-0000-0000-aaaa-111111111111', 'Flame Sword', 6, 20 , new Var(5, 5)) ]
const botEngine = new BotEngine(itemList, weaponsList)

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
