import Bot from './bot/Bot'

const port = process.env.PORT || 3000

console.log('*** STARTING FUCKING-FIGHTER BOT ***')

const FF_logo = `
####### #     #  #####  #    # ### #     #  #####     ####### ###  #####  #     # ####### ####### ######
#       #     # #     # #   #   #  ##    # #     #    #        #  #     # #     #    #    #       #     #
#       #     # #       #  #    #  # #   # #          #        #  #       #     #    #    #       #     #
#####   #     # #       ###     #  #  #  # #  ####    #####    #  #  #### #######    #    #####   ######
#       #     # #       #  #    #  #   # # #     #    #        #  #     # #     #    #    #       #   #
#       #     # #     # #   #   #  #    ## #     #    #        #  #     # #     #    #    #       #    #
#        #####   #####  #    # ### #     #  #####     #       ###  #####  #     #    #    ####### #     # `


Bot.listen(port, (error) => {
    if (error) {
        return console.log(error)
    }

    console.log(`FUCKING-FIGHTER is ready to rumble on port ${port}`)
    console.log(FF_logo)
    return
})
